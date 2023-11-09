import styled from 'styled-components';
import {
  EdgeType,
  FlowView,
  FlowViewProvider,
  SelectType,
  useFlowViewer,
} from '../../../src/index';

const initNodes = [
  {
    id: 'a1',
    data: {
      title: 'XXX_API_b3',
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
  const { updateSelectNode, updateSelectEdges, updateSelectNodes } = useFlowViewer();

  return (
    <Container>
      <FlowView
        onNodeClick={(e, node) => {
          updateSelectNodes!(['a1', 'a2', 'a3'], SelectType.SUB_SELECT);
          updateSelectNode!(node.id, SelectType.SELECT);
          updateSelectEdges!(['a1-a2', 'a1-a3'], SelectType.SUB_SELECT);
        }}
        onPaneClick={() => {
          updateSelectNodes!(['a1', 'a2', 'a3'], SelectType.DEFAULT);
          updateSelectEdges!(['a1-a2', 'a1-a3'], SelectType.DEFAULT);
        }}
        nodes={initNodes}
        edges={initEdges}
      />
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
