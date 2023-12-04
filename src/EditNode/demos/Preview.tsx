import { EditNode, TextArea } from '@ant-design/pro-flow';
import { memo } from 'react';

const String = memo(() => {
  return (
    <EditNode.Preview title={'文本框'}>
      <TextArea placeholder={'在这里输入文本内容'} type={'block'} />
    </EditNode.Preview>
  );
});

export default String;
