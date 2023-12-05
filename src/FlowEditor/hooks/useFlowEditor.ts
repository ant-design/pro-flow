import { useMemoizedFn } from 'ahooks';
import { useCallback, useMemo } from 'react';
import { ReactFlowInstance, useReactFlow } from 'reactflow';
import { useStoreApi } from '../store';
import { PublicStoreAction } from '../store/slices';
import { FlattenEdges, FlattenNodes } from '../types';

export interface FlowEditorInstance extends PublicStoreAction {
  getFlattenNodes: () => FlattenNodes;
  getFlattenEdges: () => FlattenEdges;
  getSelectedKeys: () => string[];
  reactflow?: ReactFlowInstance;
}

export const useFlowEditor = (): FlowEditorInstance => {
  const storeApi = useStoreApi();
  const reactFlowInstance = useReactFlow();

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const {
    yjsDoc,
    flattenEdges,
    selectedKeys,
    // on 方法
    onFlattenNodesChange,
    onEdgesChange,
    onFlattenEdgesChange,
    onNodesChange,
    onViewPortChange,
    onNodesTreeChange,
    onSelectionChange,
    onElementSelectChange,
    updateEdgesOnEdgeChange,
    updateEdgesOnConnection,

    // 内部更新方法
    internalUpdateEdges,
    internalUpdateNodes,
    internalUpdateSelection,

    // 最终提供给 hooks 实例的值
    ...instance
  } = storeApi.getState();
  /* eslint-enable */

  const getFlattenNodes = useMemoizedFn(() => storeApi.getState().flattenNodes);
  const getFlattenEdges = useMemoizedFn(() => storeApi.getState().flattenEdges);
  const getSelectedKeys = useMemoizedFn(() => storeApi.getState().selectedKeys);
  const screenToFlowPosition = useCallback(
    (position: { x: number; y: number }) => {
      console.log(reactFlowInstance);
      if (!reactFlowInstance) return { x: 0, y: 0 };
      return reactFlowInstance!.screenToFlowPosition!(position);
    },
    [reactFlowInstance],
  );

  return useMemo(
    () => ({
      ...instance,
      screenToFlowPosition,
      getFlattenNodes,
      getSelectedKeys,
      getFlattenEdges,
    }),
    [instance],
  );
};
