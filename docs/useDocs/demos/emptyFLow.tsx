import { FlowView } from '@ant-design/pro-flow';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <FlowView nodes={[]} edges={[]} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 800px;
  height: 500px;
`;
