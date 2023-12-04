import { EditNode, NodeField } from '@ant-design/pro-flow';
import { memo } from 'react';

const Demo = memo(() => {
  return (
    <EditNode.Preview title={'输出'}>
      <NodeField id={'variable'} title={'变量名'}>
        变量名
      </NodeField>
      <NodeField id={'sourceId'} title={'输出来源'}>
        来源
      </NodeField>
    </EditNode.Preview>
  );
});

export default Demo;
