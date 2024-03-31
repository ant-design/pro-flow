/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView, useNodesState } from '@ant-design/pro-flow';
import useStyles from './css/index.style';
import { nodes as _nodes, edges } from './data/data2';

function App() {
  const { styles } = useStyles();
  const [nodes, , onNodesChange] = useNodesState(_nodes);

  return (
    <div className={styles.container}>
      <FlowView nodes={nodes} edges={edges} onNodesChange={onNodesChange} stepLessZooming={false} />
    </div>
  );
}

export default App;
