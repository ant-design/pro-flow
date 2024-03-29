/**
 * compact: true
 */

import {
  Background,
  FlowView,
  FlowViewProvider,
  useEdgesState,
  useFlowViewer,
  useNodesState,
} from '@ant-design/pro-flow';
import { useCallback } from 'react';
import { edges, nodes } from './data';
import PipeNode from './pipeNode';
import useStyles from './techPipeLine.style';

const nodeTypes = { pipeNode: PipeNode };

function App() {
  const flowViewer = useFlowViewer();
  const { styles } = useStyles();
  const [_nodes, setNodes, onNodesChange] = useNodesState([...nodes]);
  const [_edges, setEdges, onEdgesChange] = useEdgesState([...edges]);

  const handleClick = useCallback(
    (e, n) => {
      flowViewer?.zoomToNode(n.id, 1000);
    },
    [flowViewer],
  );

  return (
    <div className={styles.container}>
      <FlowView
        onNodeClick={handleClick}
        nodes={_nodes}
        edges={_edges}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        background={false}
      >
        <Background color="#F6F8FB" variant="none" style={{ background: '#F6F8FB' }} />
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
