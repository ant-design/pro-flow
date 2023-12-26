import { Edge, Node } from 'reactflow';

import { StateCreator } from 'zustand';

import { uuid } from '@/FlowEditor/utils/uuid';
import { ActionPayload } from '../../types';
import { generateEdgeId } from '../../utils/edge';
import { FlowEditorStore } from '../actions';

interface InternalClipboardData {
  nodes: Node[];
  edges: Edge[];
}

export interface PublicGeneralAction {
  /**
   * 选择单个元素
   * @param id - 元素 id
   */
  selectElement: (id: string) => void;
  /**
   * 选择多个元素
   * @param ids - 元素 id 数组
   * @param expendSelection - 是否扩展选择，默认为 false
   */
  selectElements: (ids: string[], expendSelection?: boolean) => void;
  /**
   * 选择所有元素
   */
  selectAll: () => void;
  /**
   * 取消选择单个元素
   * @param id - 元素 id
   */
  deselectElement: (id: string) => void;
  /**
   * 取消选择所有元素
   */
  deselectAll: () => void;

  /**
   * 删除选中的元素
   */
  deleteSelection: () => void;
  /**
   * 撤销操作
   */
  undo: () => void;
  /**
   * 重做操作
   */
  redo: () => void;
  /**
   * 复制选中的元素
   * @returns Promise<InternalClipboardData>
   */
  copySelection: () => Promise<InternalClipboardData | undefined>;
  /**
   * 粘贴选中的元素
   * @returns Promise<void>
   */
  paste: () => Promise<void>;
}
export interface GeneralActionSlice extends PublicGeneralAction {
  internalUpdateSelection: (selectedKeys: string[], payload: ActionPayload) => void;
  onElementSelectChange: (id: string, selected: boolean) => void;
  pasteIntoFlow: (clipboard: InternalClipboardData) => void;
  actionList: () => { undo: number; redo: number };
}

export const generalActionSlice: StateCreator<
  FlowEditorStore,
  [['zustand/devtools', never]],
  [],
  GeneralActionSlice
> = (set, get) => ({
  internalUpdateSelection: (selectedKeys, payload) => {
    set({ selectedKeys }, false, payload);
    get().onSelectionChange?.(selectedKeys);
  },
  onElementSelectChange: (id, selected) => {
    if (selected) {
      get().selectElement(id);
    } else {
      get().deselectElement(id);
    }
  },

  actionList: () => {
    const { yjsDoc } = get();

    return { undo: yjsDoc.undoManager.undoStack.length, redo: yjsDoc.undoManager.redoStack.length };
  },

  // 选择
  selectElement: (id) => {
    if (get().selectedKeys.includes(id)) return;

    get().internalUpdateSelection([...get().selectedKeys, id], {
      type: 'selection/selectElement',
      payload: { id },
    });
  },
  selectElements: (ids, expendSelection = false) => {
    get().internalUpdateSelection(expendSelection ? [...get().selectedKeys, ...ids] : ids, {
      type: 'selection/selectElements',
      payload: { ids },
    });
  },
  selectAll: () => {
    const nodes = get().reactflow.getNodes();
    const edges = get().reactflow.getEdges();

    const ids = [...nodes.map((n) => n.id), ...edges.map((e) => e.id)];

    get().internalUpdateSelection(ids, { type: 'selection/selectAll', payload: { ids } });
  },

  deselectElement: (id) => {
    get().internalUpdateSelection(
      get().selectedKeys.filter((k) => k !== id),
      {
        type: 'selection/deselectElement',
        payload: { id },
      },
    );
  },
  deselectAll: () => {
    get().internalUpdateSelection([], { type: 'selection/deselectAll', payload: {} });
  },

  deleteSelection: () => {
    const { selectedKeys, flattenEdges, flattenNodes, dispatchNodes, dispatchEdges } = get();

    selectedKeys.forEach((id) => {
      if (flattenNodes[id]) dispatchNodes({ type: 'deleteNode', id });
      if (flattenEdges[id]) dispatchEdges({ type: 'deleteEdge', id });
    });
  },

  // 复制粘贴
  copySelection: async () => {
    const { selectedKeys, flattenEdges, flattenNodes } = get();
    if (selectedKeys.length === 0) return;

    const nodes = Object.values(flattenNodes).filter((n) => selectedKeys.includes(n.id));
    const edges = Object.values(flattenEdges).filter((n) => selectedKeys.includes(n.id));

    const selectedElements: InternalClipboardData = { nodes, edges };
    const jsonBlob = new Blob([JSON.stringify(selectedElements)], { type: 'text/html' });
    const textBlob = new Blob([JSON.stringify(selectedElements)], { type: 'text/plain' });

    const item = new ClipboardItem({
      'text/html': jsonBlob,
      'text/plain': textBlob,
    });

    await navigator.clipboard.write([item]);

    return selectedElements;
  },
  paste: async () => {
    const clipboardItems = await navigator.clipboard.read();

    clipboardItems.forEach((item) => {
      for (const type of item.types) {
        // 判断是否是
        if (type === 'text/plain') {
          const blob = item.getType(type);
          blob.then((b) => {
            b.text().then((t) => {
              let data: InternalClipboardData | undefined = undefined;

              try {
                data = JSON.parse(t);
              } catch (e) {}

              if (!data) return;
              // 粘贴逻辑
              get().pasteIntoFlow(data);
            });
          });
        }
        // 检测文本
      }
    });
  },

  pasteIntoFlow: (data) => {
    const { yjsDoc, addEdges, addNodes, deselectAll, selectElements } = get();

    const nodes: Record<string, Node> = {};
    const edges: Record<string, Edge> = {};

    // 首先取消选择旧的选区
    deselectAll();

    data.nodes.forEach((node) => {
      const id = uuid();
      nodes[id] = {
        ...node,
        id,
        // 默认偏移 10px
        position: {
          x: node.position.x + 10,
          y: node.position.y + 10,
        },
      };

      // 在 edge 中查找旧的 node id，替换为新的：
      data!.edges.forEach((edge) => {
        if (edge.source === node.id) {
          edge.source = id;
        }
        if (edge.target === node.id) {
          edge.target = id;
        }
      });
    });

    data.edges.forEach((edge) => {
      const edgeId = generateEdgeId(edge.source, edge.target, edge.sourceHandle, edge.targetHandle);

      edges[edgeId] = { ...edge, id: edgeId };
    });

    addNodes(nodes, { recordHistory: false });
    addEdges(edges, { recordHistory: false });

    yjsDoc.recordHistoryData(
      { flattenNodes: get().flattenNodes, flattenEdges: get().flattenEdges },
      { type: 'paste', name: '粘贴', timestamp: Date.now() },
    );

    // 最后将新的节点添加到选区
    const newSelections: string[] = Object.keys(nodes).concat(Object.keys(edges));
    selectElements(newSelections);
  },

  // 撤销重做
  undo: () => {
    const { yjsDoc, internalUpdateEdges, internalUpdateNodes } = get();
    const stack = yjsDoc.undo();
    const { flattenNodes, flattenEdges } = yjsDoc.getHistoryJSON();

    // if(!!flattenNodes)
    internalUpdateNodes(flattenNodes || {}, { type: 'history/undo', payload: stack });

    // if (!!flattenEdges)
    internalUpdateEdges(flattenEdges || {}, { type: 'history/undo', payload: stack });
  },
  redo: () => {
    const { yjsDoc, internalUpdateEdges, internalUpdateNodes } = get();

    const stack = yjsDoc.redo();

    const { flattenNodes, flattenEdges } = yjsDoc.getHistoryJSON();

    internalUpdateNodes(flattenNodes, { type: 'history/redo', payload: stack });
    internalUpdateEdges(flattenEdges, { type: 'history/redo', payload: stack });
  },

  // 分组
});
