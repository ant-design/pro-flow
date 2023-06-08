import isEqual from 'fast-deep-equal';
import { FC, MutableRefObject, useImperativeHandle } from 'react';
import { useReactFlow } from 'reactflow';
import { createStoreUpdater } from 'zustand-utils';

import { FlowEditorInstance, useFlowEditor } from '../hooks/useFlowEditor';
import { FlowEditorStore, useStoreApi } from '../store';
import { InternalFlow } from '../types';

export interface StoreUpdaterProps
  extends Pick<
    FlowEditorStore,
    | 'flattenEdges'
    | 'onEdgesChange'
    | 'flattenNodes'
    | 'onFlattenNodesChange'
    | 'onNodesChange'
    | 'onFlattenEdgesChange'
    | 'onNodesTreeChange'
    | 'onViewPortChange'
  > {
  /**
   * 对外部暴露方法
   */
  editorRef?: MutableRefObject<FlowEditorInstance>;
}

const StoreUpdater: FC<StoreUpdaterProps> = ({
  flattenNodes,
  onFlattenNodesChange,
  onNodesChange,
  flattenEdges,
  onEdgesChange,
  onFlattenEdgesChange,
  onNodesTreeChange,
  onViewPortChange,
  editorRef,
}) => {
  const reactFlow = useReactFlow();
  const useStoreUpdater = createStoreUpdater<FlowEditorStore>(useStoreApi());

  // 由于这是一个受控的组件，因此需要将外部的状态同步到内部来，由于 yjs 的状态是要独立维护的，因此抽取了一个复用函数
  const storeApi = useStoreApi();
  const { yjsDoc } = storeApi.getState();

  // 结合 yjs 进行变更
  const useUpdateWithYjs = (key: keyof InternalFlow, value: any) => {
    useStoreUpdater(key, value, [value], (partialNewState) => {
      // 如果相等，不需要更新
      if (isEqual(value, storeApi.getState()[key])) return;

      storeApi.setState(partialNewState);

      yjsDoc.updateHistoryData(partialNewState);
    });
  };

  useUpdateWithYjs('flattenNodes', flattenNodes);
  useUpdateWithYjs('flattenEdges', flattenEdges);

  useStoreUpdater('reactflow', reactFlow);

  useStoreUpdater('onFlattenNodesChange', onFlattenNodesChange);
  useStoreUpdater('onFlattenEdgesChange', onFlattenEdgesChange);

  useStoreUpdater('onNodesChange', onNodesChange);
  useStoreUpdater('onEdgesChange', onEdgesChange);
  useStoreUpdater('onNodesTreeChange', onNodesTreeChange);

  useStoreUpdater('onViewPortChange', onViewPortChange);

  // 将 store 传递到外部
  const instance = useFlowEditor();
  useImperativeHandle(editorRef, () => instance);
  return null;
};

export default StoreUpdater;
