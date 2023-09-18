import { BasicNode, TextArea } from '@ant-design/pro-flow';
import { memo } from 'react';

const String = memo(() => {
  return (
    <BasicNode.Preview title={'文本框'}>
      <TextArea placeholder={'在这里输入文本内容'} type={'block'} />
    </BasicNode.Preview>
  );
});

export default String;
