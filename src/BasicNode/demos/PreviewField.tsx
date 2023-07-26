import { BasicNode, NodeField } from 'pro-flow-editor';
import { memo } from 'react';

const Demo = memo(() => {
  return (
    <BasicNode.Preview title={'输出'}>
      <NodeField id={'variable'} title={'变量名'}>
        变量名
      </NodeField>
      <NodeField id={'sourceId'} title={'输出来源'}>
        来源
      </NodeField>
    </BasicNode.Preview>
  );
});

export default Demo;
