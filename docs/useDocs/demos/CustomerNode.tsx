import { FC, useCallback } from 'react';
import styled from 'styled-components';
import { FlowView, Handle, Position } from '../../../src/index';

const Wrap = styled.div`
  width: 200px;
  height: 83px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
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
  console.log(props);
  const { data } = props;

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <Wrap>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{data.title}</label>
        <input id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" style={{ left: 10 }} />
    </Wrap>
  );
};

const nodes = [
  {
    id: 'b1',
    type: 'customNode',
    data: {
      title: 'Text',
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