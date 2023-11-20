import { FlowView } from '@ant-design/pro-flow';
import styled from 'styled-components';

const nodes = [
  {
    id: 'a1',
    data: {
      title: 'XXX_API_b3',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
];

function App() {
  return (
    <Container>
      <FlowView nodes={nodes} edges={[]} miniMap={false} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 800px;
  height: 300px;
`;
