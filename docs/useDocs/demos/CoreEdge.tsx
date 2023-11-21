import styled from 'styled-components';
import { FlowView } from '../../../src/index';

const Container = styled.div`
  width: 800px;
  height: 300px;
`;

const nodes = [
  {
    id: 'a1',
    data: {
      title: '节点1',
    },
  },
  {
    id: 'a2',
    data: {
      title: '节点2',
    },
  },
  {
    id: 'a3',
    data: {
      title: '节点3',
    },
  },
  {
    id: 'a4',
    data: {
      title: '节点4',
    },
  },
  {
    id: 'a5',
    data: {
      title: '节点5',
    },
  },
  {
    id: 'a6',
    data: {
      title: '节点6',
    },
  },
];

const edges = [
  {
    source: 'a1',
    target: 'a2',
    type: 'straight',
    label: 'straight',
  },
  {
    source: 'a1',
    target: 'a3',
    type: 'step',
    label: 'step',
  },
  {
    source: 'a2',
    target: 'a3',
    type: 'straight',
    label: 'straight',
  },
  {
    source: 'a3',
    target: 'a6',
    type: 'bezier',
    label: 'bezier',
  },
  {
    source: 'a2',
    target: 'a4',
    type: 'smmothstep',
    label: 'smmothstep',
  },
  {
    source: 'a3',
    target: 'a5',
    type: 'bezier',
    label: 'bezier',
  },
  {
    source: 'a2',
    target: 'a6',
    type: 'radius',
    label: 'radius',
  },
];

function App() {
  return (
    <Container>
      <FlowView
        onNodeClick={(event, node) => {
          console.log(node);
        }}
        nodes={nodes}
        edges={edges}
        miniMap={false}
      />
    </Container>
  );
}

export default App;
