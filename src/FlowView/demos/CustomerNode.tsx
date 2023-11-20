import { Handle, Position } from '@/index';
import { FC, useCallback } from 'react';
import styled from 'styled-components';
// import { Handle, Position } from 'reactflow';

const Wrap = styled.div`
  width: 200px;
  height: 100px;
  background-color: red;
`;

const CustomNode: FC<{
  data: {
    title: string;
  };
}> = ({ data }) => {
  const onChange = useCallback((evt: { target: { value: any } }) => {
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

export default CustomNode;
