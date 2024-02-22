import { FC, MutableRefObject, useImperativeHandle } from 'react';
import { createStoreUpdater } from 'zustand-utils';

import { FlowEditorInstance, useFlowEditor } from '../../hooks/useFlowEditor';
import { FlowEditorStore, useStoreApi } from '../../store';

export interface CommonUpdaterProps
  extends Partial<
    Pick<
      FlowEditorStore,
      | 'flattenEdges'
      | 'onEdgesChange'
      | 'beforeEdgesChange'
      | 'afterEdgesChange'
      | 'flattenNodes'
      | 'onFlattenNodesChange'
      | 'onNodesChange'
      | 'beforeNodesChange'
      | 'afterNodesChange'
      | 'onFlattenEdgesChange'
      | 'onNodesTreeChange'
    >
  > {
  /**
   * 对外部暴露方法
   */
  editorRef?: MutableRefObject<FlowEditorInstance>;
  useStateUpdater?: (key: any, value: any) => void;
}

const CommonStoreUpdater: FC<CommonUpdaterProps> = ({
  onFlattenNodesChange,
  onNodesChange,
  beforeNodesChange,
  afterNodesChange,
  onEdgesChange,
  beforeEdgesChange,
  afterEdgesChange,
  onFlattenEdgesChange,
  onNodesTreeChange,
  editorRef,
  useStateUpdater,
  flattenNodes,
  flattenEdges,
}) => {
  const useStoreUpdater = createStoreUpdater<FlowEditorStore>(useStoreApi());

  const useCustomUpdater = useStateUpdater ?? useStoreUpdater;

  useCustomUpdater('flattenNodes', flattenNodes);
  useCustomUpdater('flattenEdges', flattenEdges);

  useStoreUpdater('onFlattenNodesChange', onFlattenNodesChange);
  useStoreUpdater('onFlattenEdgesChange', onFlattenEdgesChange);

  useStoreUpdater('onNodesChange', onNodesChange);
  useStoreUpdater('beforeNodesChange', beforeNodesChange);
  useStoreUpdater('afterNodesChange', afterNodesChange);

  useStoreUpdater('onEdgesChange', onEdgesChange);
  useStoreUpdater('beforeEdgesChange', beforeEdgesChange);
  useStoreUpdater('afterEdgesChange', afterEdgesChange);

  useStoreUpdater('onNodesTreeChange', onNodesTreeChange);

  // 将 store 传递到外部
  const instance = useFlowEditor();
  useImperativeHandle(editorRef, () => instance);
  return null;
};

export default CommonStoreUpdater;
