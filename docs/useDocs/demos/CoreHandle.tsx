import { FC } from 'react';
import styled from 'styled-components';
import { FlowView, Handle, Position } from '../../../src/index';

const Wrap = styled.div`
  width: 200px;
  height: 83px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  width: 800px;
  height: 300px;
`;

const CustomNode: FC<{
  data: {
    title: string;
  };
}> = (props) => {
  const { data } = props;

  return (
    <Wrap>
      <Handle type="target" position={Position.Top} id="a" />
      <Handle type="target" position={Position.Top} id="b" style={{ left: 10 }} />
      <Handle type="target" position={Position.Top} id="c" style={{ left: 190 }} />
      <div>
        <label htmlFor="text">{data.title}</label>
      </div>
      <Handle type="source" position={Position.Bottom} id="d" />
      <Handle type="source" position={Position.Bottom} id="e" style={{ left: 10 }} />
      <Handle type="source" position={Position.Bottom} id="f" style={{ left: 190 }} />
    </Wrap>
  );
};

const nodes = [
  {
    id: 'b1',
    type: 'customNode',
    data: {
      title: '一堆 Handle',
    },
  },
];

const nodeTypes = { customNode: CustomNode };

function App() {
  return (
    <Container>
      <FlowView
        onNodeClick={(event, node) => {
          console.log(node);
        }}
        nodes={nodes}
        edges={[]}
        nodeTypes={nodeTypes}
        miniMap={false}
        autoLayout={false}
      />
    </Container>
  );
}

export default App;
