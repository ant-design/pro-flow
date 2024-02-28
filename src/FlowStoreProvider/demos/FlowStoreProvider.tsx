/**
 * description: FlowStoreProvider 包裹后的子级可以获得 editor 实例，使用 editor 提供的各种数据操作方法
 */
// import { DataPreviewer } from '@ant-design/pro-editor';
import { FlowStoreProvider, IFlowBasicNode, useFlowEditor } from '@ant-design/pro-flow';
import { Button } from 'antd';
import { useState } from 'react';

const App = () => {
  const editor = useFlowEditor();

  return (
    <div>
      <Button
        onClick={() => {
          editor.updateNodeContent('1', 'abc', Math.random());
        }}
      >
        插入 abc key 为随机数
      </Button>

      {/* <DataPreviewer data={[editor.getFlattenNodes()]} /> */}
    </div>
  );
};

export default () => {
  const [nodes, setNodes] = useState<Record<string, IFlowBasicNode>>({
    '1': {
      id: '1',
      position: { x: 0, y: 0 },
      data: { id: '1', meta: {}, state: { collapsedKeys: [] }, content: {} },
    },
  });

  return (
    <FlowStoreProvider
      flattenNodes={nodes}
      onFlattenNodesChange={(flattenNodes) => {
        setNodes(flattenNodes);
      }}
    >
      <App />
    </FlowStoreProvider>
  );
};
