import { FlowView } from '@ant-design/pro-flow';
import { EdgeType } from '@ant-design/pro-flow/es/index';
import styled from 'styled-components';
import { SelectType } from '../../../src/FlowView/constants';
import { useFlowViewer } from '../../../src/FlowView/hooks/useFlowView';
import { FlowViewProvider } from '../../../src/FlowView/provider/FlowViewProvider';

const nodes = [
  {
    id: 'a1',
    data: {
      title: 'XXX_API_b3',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'a2',
    data: {
      title: 'XXX_API_b4',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
    position: {
      x: 600,
      y: 200,
    },
  },
  {
    id: 'a3',
    data: {
      title: 'XXX_API_b4',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
    position: {
      x: 600,
      y: 400,
    },
  },
];
const edges = [
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
  const { updateSelectNode, updateSelectEdge, updateSelectEdges, updateSelectNodes } =
    useFlowViewer();

  return (
    <Container>
      <FlowView
        onNodeClick={() => {
          updateSelectNodes!(['a1', 'a2', 'a3'], SelectType.SUB_DANGER);
          updateSelectNode!('a3', SelectType.DANGER);
          updateSelectEdges!(['a1-a2', 'a1-a3'], SelectType.SELECT);
          updateSelectEdge!('a1-a2', SelectType.SUB_SELECT);
        }}
        nodes={nodes}
        edges={edges}
        miniMap={false}
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
