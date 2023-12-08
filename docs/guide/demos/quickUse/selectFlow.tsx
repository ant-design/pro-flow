/**
 * compact: true
 * defaultShowCode: true
 */
import {
  FlowPanel,
  FlowView,
  FlowViewProvider,
  SelectType,
  useFlowViewer,
} from '@ant-design/pro-flow';
import { useState } from 'react';
import useStyles from './css/index.style';
import { edges, nodes } from './data';

function App() {
  const { selectNode, selectEdges, selectNodes } = useFlowViewer();
  const [node, setNode] = useState(null);
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView
        onNodeClick={(e, node) => {
          setNode(node);
          selectNodes(['a1', 'a2', 'a3'], SelectType.SUB_SELECT);
          selectNode(node.id, SelectType.SELECT);
          selectEdges(['a1-a2', 'a1-a3'], SelectType.SUB_SELECT);
        }}
        onPaneClick={() => {
          setNode(null);
          selectNodes(['a1', 'a2', 'a3'], SelectType.DEFAULT);
          selectEdges(['a1-a2', 'a1-a3'], SelectType.DEFAULT);
        }}
        nodes={nodes}
        edges={edges}
      >
        <FlowPanel>
          <div className="panel-title">
            {node ? `当前选中的是：${node.id}` : `当前没有选中节点`}
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
