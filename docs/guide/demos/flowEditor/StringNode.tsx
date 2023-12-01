import { Handle, Position } from '@ant-design/pro-flow';
import { FC } from 'react';
import './css/index.less';

export const StringRender: FC = (node: any) => {
  const { handles, id, selected } = node;

  return (
    <div className={`stringNode ${selected && 'selected'}`}>
      <Handle
        id={typeof handles?.target === 'string' ? handles?.target : id}
        type={'target'}
        position={Position.Left}
      />
      {node.data.title}
      <Handle
        id={typeof handles?.source === 'string' ? handles?.source : id}
        type={'source'}
        position={Position.Right}
      />
    </div>
  );
};
