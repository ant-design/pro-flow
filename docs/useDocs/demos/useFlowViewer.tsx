import { Button } from 'antd';
import styled from 'styled-components';
import {
  EdgeType,
  FlowPanel,
  FlowView,
  FlowViewProvider,
  SelectType,
  useFlowViewer,
} from '../../../src/index';

const initNodes = [
  {
    id: 'a1',
    data: {
      title: 'a1 节点',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a2',
    data: {
      title: 'XXX_API_b4',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a3',
    data: {
      title: 'XXX_API_b4',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
];
const initEdges = [
  {
    id: 'a1-a2',
    source: 'a1',
    target: 'a2',
  },
  {
    id: 'a1-a3',
    source: 'a1',
    target: 'a3',
    type: EdgeType.radius,
  },
];

function App() {
  const { selectNode, selectEdges, selectNodes, zoomToNode } = useFlowViewer();

  return (
    <Container>
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
        nodes={initNodes}
        edges={initEdges}
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
    </Container>
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

const Container = styled.div`
  width: 800px;
  height: 500px;
`;
