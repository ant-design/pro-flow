import { FlowView, Handle, Position } from '@ant-design/pro-flow';
import { FC, useCallback } from 'react';
import styled from 'styled-components';

const CustomNode: FC<{
  title: string;
}> = ({ title }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{title}</label>
        <input id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" style={{ left: 10 }} />
    </>
  );
};

const nodes = [
  {
    id: 'a1',
    type: '',
    data: {
      title: 'Text',
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
