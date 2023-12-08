import isEqual from 'fast-deep-equal';
import { Node } from 'reactflow';
import { StateCreator } from 'zustand';

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
   * 更新节点元数据
   * @param id 要更新的节点 id
   * @param key 要更新的元数据键名
   * @param value 要更新的元数据值
   * @param options 节点操作的选项
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
    const { type, ...res } = payload;
    const flattenNodes = nodeReducer(get().flattenNodes, payload);
    if (isEqual(flattenNodes, get().flattenNodes)) return;

    get().internalUpdateNodes(flattenNodes, {
      type: `dispatchFlattenNodes/${type}`,
      payload: res,
    });

    const { yjsDoc } = get();

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
    get().dispatchNodes({ type: 'addNode', node });
  },
  addNodes: (nodes, options) => {
    get().dispatchNodes({ type: 'addNodes', nodes }, options);
  },
  deleteNode: (id) => {
    get().deselectElement(id);
    get().dispatchNodes({ type: 'deleteNode', id });
  },
});
