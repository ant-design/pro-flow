/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import useStyles from './css/index.style';
import { edges, nodes } from './data';

function App() {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;
