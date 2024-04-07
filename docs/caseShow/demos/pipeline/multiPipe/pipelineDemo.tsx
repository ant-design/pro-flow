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
import useStyles from '../../index.style';
import { edges, nodes } from './data';
import { PipeNode } from './pipeNode';

const nodeTypes = { pipeNode: PipeNode };

function App() {
  const flowViewer = useFlowViewer();
  const { styles } = useStyles();
  const [_nodes, , onNodesChange] = useNodesState([...nodes]);
  const [_edges, , onEdgesChange] = useEdgesState([...edges]);

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
        <Background color="#f1f1f1" variant="none" style={{ background: '#f1f1f1' }} />
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
