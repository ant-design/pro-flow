import {
  FlowPanel,
  FlowView,
  FlowViewProvider,
  SelectType,
  useFlowViewer,
} from '@ant-design/pro-flow';
import { Button } from 'antd';
import useStyles from './css/viewer.style';
import { edges, nodes } from './data/viewer';

function App() {
  const { selectNode, selectEdges, selectNodes, zoomToNode } = useFlowViewer();
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView
        onNodeClick={(e, node) => {
          selectNodes(['a1', 'a2', 'a3'], SelectType.SUB_SELECT);
          selectNode(node.id, SelectType.SELECT);
          selectEdges(['a1-a2', 'a1-a3'], SelectType.SUB_SELECT);
        }}
        onPaneClick={() => {
          selectNodes(['a1', 'a2', 'a3'], SelectType.DEFAULT);
          selectEdges(['a1-a2', 'a1-a3'], SelectType.DEFAULT);
        }}
        nodes={nodes}
        edges={edges}
      >
        <FlowPanel position={'top-center'}>
          <div>
            <Button
              onClick={() => {
                zoomToNode('a1', 1000);
              }}
            >
              快速聚焦到 a1 节点
            </Button>
            <Button
              onClick={() => {
                selectNodes(['a1', 'a2', 'a3'], SelectType.SELECT);
              }}
            >
              选中全部节点
            </Button>
            <Button
              onClick={() => {
                selectEdges(['a1-a2', 'a1-a3'], SelectType.SELECT);
              }}
            >
              选中全部边缘
            </Button>
          </div>
        </FlowPanel>
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
