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
import { Button } from 'antd';
import { useMemo } from 'react';
import ButtonEdge from './ButtonEdge';
import useStyles from './btn.style';
import { getEdges, nodes } from './data';

const edgeTypes = {
  buttonEdge: ButtonEdge,
};

function App() {
  const { styles } = useStyles();
  const edges = useMemo(() => getEdges(styles.customEdge), []);
  const { selectEdges } = useFlowViewer();

  return (
    <div className={styles.container}>
      <FlowView nodes={nodes} edges={edges} edgeTypes={edgeTypes}>
        <FlowPanel position={'top-center'}>
          <div>
            <Button
              onClick={() => {
                selectEdges(['e1', 'e2'], SelectType.DEFAULT);
              }}
            >
              edge select is default
            </Button>
            <Button
              onClick={() => {
                selectEdges(['e1', 'e2'], SelectType.DANGER);
              }}
            >
              edge select is danger
            </Button>
            <Button
              onClick={() => {
                selectEdges(['e1', 'e2'], SelectType.WARNING);
              }}
            >
              edge select is warning
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
