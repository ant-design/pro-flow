import { CopyOutlined } from '@ant-design/icons';
import { NodeField } from 'kitchen-flow-editor';

export default () => {
  return (
    <NodeField
      id={'test'}
      title={'测试'}
      extra={[
        {
          title: '复制',
          icon: <CopyOutlined />,
          onClick: () => {
            alert('复制文本');
          },
        },
      ]}
    >
      内容
    </NodeField>
  );
};
