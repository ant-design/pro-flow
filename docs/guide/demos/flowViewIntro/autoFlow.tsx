/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import useStyles from './css/index.style';
import { edges, nodes } from './data/data2';

function App() {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView
        nodes={nodes}
        edges={edges}
        layoutOptions={{
          rankdir: 'BT',
          align: 'DL',
          nodesep: 1000,
          ranksep: 500,
        }}
        onEdgeClick={(e, edge) => {
          console.log(edge);
        }}
      ></FlowView>
    </div>
  );
}

export default App;
