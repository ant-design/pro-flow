import { BasicNode, NodeField } from '@ant-design/pro-flow-editor';
import { Button, Divider } from 'antd';
import { memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

const Demo = memo(() => {
  const [collapsedKeys, setKeys] = useState<string[]>([]);
  return (
    <div>
      <BasicNode.Preview
        collapsedKeys={collapsedKeys}
        onCollapsedKeysChange={setKeys}
        title={'输出'}
      >
        <NodeField id={'variable'} title={'变量名'}>
          变量名
        </NodeField>
        <NodeField id={'sourceId'} title={'输出来源'}>
          来源
        </NodeField>
        <NodeField id={'model'} title={'模型'}>
          GPT-3.5-turbo
        </NodeField>
      </BasicNode.Preview>
      <Divider />
      <Flexbox align={'center'} horizontal gap={8}>
        <Button
          onClick={() => {
            setKeys([]);
          }}
        >
          全部展开
        </Button>
        <div>折起 Key: {collapsedKeys.join(',')}</div>{' '}
      </Flexbox>
    </div>
  );
});

export default Demo;
