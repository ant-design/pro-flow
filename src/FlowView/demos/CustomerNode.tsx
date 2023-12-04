import { Handle, Position } from '@/index';
import { FC, useCallback } from 'react';
import './index.less';

const CustomNode: FC<{
  data: {
    title: string;
  };
}> = ({ data }) => {
  const onChange = useCallback((evt: { target: { value: any } }) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="CustomWrap">
      <Handle type="target" position={Position.Left} />
      <div>
        <label htmlFor="text">{data.title}</label>
        <input id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" style={{ left: 10 }} />
    </div>
  );
};

export default CustomNode;
