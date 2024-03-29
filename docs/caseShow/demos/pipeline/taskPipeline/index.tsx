/**
 * compact: true
 */

import { Background, FlowView, applyEdgeChanges, applyNodeChanges } from '@ant-design/pro-flow';
import { useCallback, useState } from 'react';
// import ReactFlow, { applyEdgeChanges, applyNodeChanges, Background } from 'reactflow';
import { edges, nodes } from './data';
import StageNode from './nodes/stageNode';
import taskNode from './nodes/taskNode';
import useStyles from './styled';

const nodeTypes = { taskNode, StageNode };

const rfStyle = {
  backgroundColor: '#D0C0F7',
};

function App() {
  const { styles } = useStyles();
  const [_nodes, setNodes] = useState(nodes);
  const [_edges, setEdges] = useState(edges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );

  return (
    <div className={styles.container}>
      <FlowView
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        nodes={_nodes}
        edges={_edges}
        background={false}
        autoLayout={true}
      >
        <Background color="#D0C0F7" variant="none" style={{ background: '#D0C0F7' }} />
      </FlowView>
      {/* <ReactFlow
        nodes={_nodes}
        edges={_edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        style={rfStyle}
        attributionPosition="top-right"
      >
        <Background />
      </ReactFlow> */}
    </div>
  );
}

function ProApp() {
  return <App />;
}

export default ProApp;
