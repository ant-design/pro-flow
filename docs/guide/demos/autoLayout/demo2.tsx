/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import { edges, nodes } from './data/demo2data';
import useStyles from './index.style';

function App() {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={nodes} edges={edges} miniMap={false} />
    </div>
  );
}

export default App;
