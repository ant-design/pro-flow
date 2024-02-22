import isEqual from 'fast-deep-equal';
import { FC } from 'react';
import { useReactFlow } from 'reactflow';
import { createStoreUpdater } from 'zustand-utils';

import { FlowEditorStore, useStoreApi } from '../../store';
import { InternalFlow } from '../../types';

import CommonStoreUpdater, { CommonUpdaterProps } from './Common';

export interface StoreUpdaterProps
  extends Omit<CommonUpdaterProps, 'useStateUpdater'>,
    Pick<FlowEditorStore, 'onViewPortChange'> {}

const StoreUpdater: FC<StoreUpdaterProps> = ({
  flattenNodes,
  onFlattenNodesChange,
  onNodesChange,
  beforeNodesChange,
  afterNodesChange,
  flattenEdges,
  onEdgesChange,
  beforeEdgesChange,
  afterEdgesChange,
  onFlattenEdgesChange,
  onNodesTreeChange,
  onViewPortChange,
  editorRef,
}) => {
  const useStoreUpdater = createStoreUpdater<FlowEditorStore>(useStoreApi());

  // 由于这是一个受控的组件，因此需要将外部的状态同步到内部来，由于 yjs 的状态是要独立维护的，因此抽取了一个复用函数
  const storeApi = useStoreApi();

  // 结合 yjs 进行变更
  const useUpdateWithYjs = (key: keyof InternalFlow, value: any) => {
    useStoreUpdater(key, value, [value], (partialNewState) => {
      // 如果相等，不需要更新
      if (isEqual(value, storeApi.getState()[key])) return;

      storeApi.setState(partialNewState);

      const { yjsDoc } = storeApi.getState();

      yjsDoc.updateHistoryData(partialNewState);
    });
  };

  // 需要使用 Flow 部分的变更
  const reactFlow = useReactFlow();

  useStoreUpdater('reactflow', reactFlow);
  useStoreUpdater('onViewPortChange', onViewPortChange);

  return (
    <CommonStoreUpdater
      flattenNodes={flattenNodes}
      flattenEdges={flattenEdges}
      editorRef={editorRef}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
      beforeNodesChange={beforeNodesChange}
      beforeEdgesChange={beforeEdgesChange}
      afterEdgesChange={afterEdgesChange}
      afterNodesChange={afterNodesChange}
      onNodesTreeChange={onNodesTreeChange}
      onFlattenEdgesChange={onFlattenEdgesChange}
      onFlattenNodesChange={onFlattenNodesChange}
      useStateUpdater={useUpdateWithYjs}
    />
  );
};

export default StoreUpdater;
