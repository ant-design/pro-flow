import { BasicNode, Handle, Position } from '@ant-design/pro-flow';
import { FC } from 'react';
import './css/editNode.less';

export const EditorNode: FC = (node: any) => {
  const { handles, id, selected } = node;

  return (
    <div className={`editNode ${selected && 'selected'}`}>
      <Handle
        id={typeof handles?.target === 'string' ? handles?.target : id}
        type={'target'}
        position={Position.Left}
      />

      <BasicNode.Preview title={'输出'}></BasicNode.Preview>

      <Handle
        id={typeof handles?.source === 'string' ? handles?.source : id}
        type={'source'}
        position={Position.Right}
      />
    </div>
  );
};
