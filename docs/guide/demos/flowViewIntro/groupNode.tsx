/**
 * compact: true
 * defaultShowCode: true
 */
import { FlowView } from '@ant-design/pro-flow';
import useStyles from './css/index.style';
// import { edges, nodes } from './data/data3';

const GroupNode = () => {
  return (
    <div
      style={{
        width: 500,
        height: 800,
        backgroundColor: 'red',
      }}
    ></div>
  );
};

const nodeTypes = { GroupNode };

const nodes = [
  {
    id: '1',
    type: 'GroupNode',
    position: { x: 0, y: 0 },
    zIndex: -1,
  },
  {
    id: '2',
    position: { x: 50, y: 10 },
    parentNode: '1',
    extent: 'parent',
  },
  {
    id: '3',
    position: { x: 50, y: 190 },
    parentNode: '1',
    extent: 'parent',
  },
];

const edges = [
  {
    id: 'e1',
    source: '2',
    target: '3',
  },
];

function App() {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodeTypes={nodeTypes} nodes={nodes} edges={edges} autoLayout={false}></FlowView>
    </div>
  );
}

export default App;
