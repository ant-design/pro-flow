/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowPanel, FlowView, FlowViewProvider, useFlowViewer } from '@ant-design/pro-flow';
import { useState } from 'react';
// import './css/index.less';
import CustomNode from './CustomNode';
import { edges, nodes } from './data';

const nodeTypes = { customNode: CustomNode };

function App() {
  const { selectNode, selectEdges, selectNodes } = useFlowViewer();
  const [node, setNode] = useState(null);

  return (
    <div className="container">
      <FlowView nodeTypes={nodeTypes} nodes={nodes} edges={edges}>
        <FlowPanel>
          <div className="panel-title">
            {node ? `当前选中的是：${node.id}` : `当前没有选中节点`}
          </div>
        </FlowPanel>
      </FlowView>
    </div>
  );
}

function ProApp() {
  return (
    <FlowViewProvider>
      <App />
    </FlowViewProvider>
  );
}

export default ProApp;
