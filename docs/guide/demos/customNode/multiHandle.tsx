/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import CustomNode from './components/CustomNode';
import useStyles from './css/index.style';
import { edges, nodes } from './data/multi';

const nodeTypes = { customNode: CustomNode };

function App() {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={nodes} edges={edges} nodeTypes={nodeTypes} />
    </div>
  );
}

export default App;
