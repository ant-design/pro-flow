/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import ButtonEdge from './ButtonEdge';
import useStyles from './btn.style';
import { getEdges, nodes } from './data';

const edgeTypes = {
  buttonEdge: ButtonEdge,
};

function App() {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={nodes} edges={getEdges(styles.customEdge)} edgeTypes={edgeTypes} />
    </div>
  );
}

export default App;
