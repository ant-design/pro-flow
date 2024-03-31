/**
 * compact: true
 */

import { Background, FlowView, applyEdgeChanges, applyNodeChanges } from '@ant-design/pro-flow';
import { useCallback, useState } from 'react';
import { edges, nodes } from './data';
import StageNode from './nodes/stageNode';
import taskNode from './nodes/taskNode';
import useStyles from './styled';

const nodeTypes = { taskNode, StageNode };

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
        layoutOptions={{
          ranksep: 50,
        }}
      >
        <Background color="#f1f1f1" variant="none" style={{ background: '#f1f1f1' }} />
      </FlowView>
    </div>
  );
}

function ProApp() {
  return <App />;
}

export default ProApp;
