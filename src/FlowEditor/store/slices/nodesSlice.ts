import isEqual from 'fast-deep-equal';
import { Node, NodeChange } from 'reactflow';
import { StateCreator } from 'zustand';

import { convertNodeChange } from '@/FlowEditor/utils/convertChange';
import { ActionOptions, ActionPayload, FlattenNodes, MetaData, NodeState } from '../../types';
import { FlowEditorStore } from '../actions';
import { NodeDispatch, nodeReducer } from '../reducers/node';

/**
 * 公共节点操作接口
 */
export interface PublicNodesAction {
  /**
   * 分发节点操作
   * @param payload 节点操作的载荷
   * @param options 节点操作的选项
   */
  dispatchNodes: (payload: NodeDispatch, options?: ActionOptions) => void;
  /**
   * 添加节点到指定位置
   * @param node 要添加的节点
   * @param index 要添加到的位置，默认为末尾
   */
  addNode: (node: Node, index?: number) => void;
  addNodes: (nodes: Record<string, Node>, options?: ActionOptions) => void;
  /**
   * 移除指定 id 的节点
   * @param id 要移除的节点 id
   */
  deleteNode: (id: string) => void;
  /**
   * 删除节点元素
   * @param id 要删除的节点 id
   */
  deleteNodes: (ids: string[]) => void;
  /**
   * 批量删除节点
   * @param ids 要批量删除的节点 id
   */
  updateNodeMeta: <T extends keyof MetaData>(
    id: string,
    key: T,
    value: MetaData[T],
    options?: ActionOptions,
  ) => void;
  /**
   * 更新节点状态
   * @param id 要更新的节点 id
   * @param key 要更新的状态键名
   * @param value 要更新的状态值
   * @param options 节点操作的选项
   */
  updateNodeState: <T extends keyof NodeState>(
    id: string,
    key: T,
    value: NodeState[T],
    options?: ActionOptions,
  ) => void;
  /**
   * 更新节点内容
   * @param id 要更新的节点 id
   * @param key 要更新的内容键名
   * @param value 要更新的内容值
   * @param options 节点操作的选项
   */
  updateNodeContent: <T extends object>(
    id: string,
    key: keyof T,
    value: T[keyof T],
    options?: ActionOptions,
  ) => void;
  /**
   * 更新节点数据
   * @param id 要更新的节点 id
   * @param newData 要更新的数据
   * @param forceReplace 是否强制替换整个数据
   * @param options 节点操作的选项
   */
  updateNodeData: <T extends object>(
    id: string,
    newData: T,
    forceReplace?: boolean,
    options?: ActionOptions,
  ) => void;
}

export interface NodesSlice extends PublicNodesAction {
  internalUpdateNodes: (flattenNodes: FlattenNodes, payload: ActionPayload) => void;
  handleNodesChange: (changes: NodeChange[]) => void;
  nodesChangeLifecycle: (
    changes: NodeChange[],
    doSomething?: (...args: any) => void,
    doSomethingParams?: any,
  ) => void;
}

export const nodesSlice: StateCreator<
  FlowEditorStore,
  [['zustand/devtools', never]],
  [],
  NodesSlice
> = (set, get) => ({
  internalUpdateNodes: (flattenNodes, payload) => {
    if (isEqual(flattenNodes, get().flattenNodes)) return;

    set({ flattenNodes }, false, payload);

    get().onFlattenNodesChange?.(flattenNodes);
  },

  dispatchNodes: (payload, { recordHistory = true } = { recordHistory: true }) => {
    const { nodesChangeLifecycle, internalUpdateNodes, yjsDoc } = get();
    const { type, ...res } = payload;
    const changes = convertNodeChange(payload);

    const flattenNodes = nodeReducer(get().flattenNodes, payload);
    if (isEqual(flattenNodes, get().flattenNodes)) return;

    nodesChangeLifecycle(changes);

    internalUpdateNodes(flattenNodes, {
      type: `dispatchFlattenNodes/${type}`,
      payload: res,
    });

    if (recordHistory) {
      yjsDoc.recordHistoryData(
        { flattenNodes },
        { type: 'nodes', name: payload.type, timestamp: Date.now() },
      );
    }
  },

  updateNodeMeta: (id, key, value, options) => {
    get().dispatchNodes({ type: 'updateNodeMeta', id, key, value }, options);
  },

  updateNodeState: (id, key, value, options) => {
    get().dispatchNodes({ type: 'updateNodeState', id, key: key as any, value }, options);
  },

  updateNodeContent: (id, key, value, options) => {
    get().dispatchNodes({ type: 'updateNodeContent', id, key: key as any, value }, options);
  },

  updateNodeData: (id, newData, deepReplace = false, options) => {
    get().dispatchNodes(
      {
        type: 'updateNodeData',
        id,
        newData: newData as any,
        deepReplace,
      },
      options,
    );
  },

  addNode: (node) => {
    get().dispatchNodes({
      type: 'addNode',
      node,
    });
  },

  addNodes: (nodes, options) => {
    get().dispatchNodes(
      {
        type: 'addNodes',
        nodes,
      },
      options,
    );
  },

  deleteNode: (id) => {
    get().deselectElement(id);
    get().dispatchNodes({ type: 'deleteNode', id });
  },

  deleteNodes: (ids) => {
    ids.forEach((id) => {
      get().deselectElement(id);
      get().dispatchNodes({ type: 'deleteNode', id });
    });
  },

  handleNodesChange: (changes) => {
    const { dispatchNodes, onElementSelectChange, deselectElement, nodesChangeLifecycle } = get();

    changes.forEach((c) => {
      switch (c.type) {
        case 'add':
          dispatchNodes({
            type: 'addNode',
            node: c.item,
          });
          break;
        case 'position':
          // 结束拖拽时，会触发一次 position，此时 dragging 为 false
          if (!c.dragging) break;

          dispatchNodes({ type: 'updateNodePosition', position: c.position, id: c.id });
          break;
        case 'remove':
          deselectElement(c.id);
          dispatchNodes({ type: 'deleteNode', id: c.id });
          break;
        case 'select':
          nodesChangeLifecycle(changes, onElementSelectChange, {
            id: c.id,
            selected: true,
          });
      }
    });
  },

  nodesChangeLifecycle: (changes, doSomething, doSomethingParams) => {
    const { beforeNodesChange, onNodesChange, afterNodesChange } = get();

    if (beforeNodesChange && !beforeNodesChange(changes)) {
      return;
    }

    if (onNodesChange) {
      onNodesChange(changes);
    }

    if (doSomething) {
      doSomething(...doSomethingParams);
    }

    if (afterNodesChange) {
      afterNodesChange(changes);
    }
  },
});
