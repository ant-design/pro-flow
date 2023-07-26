/**
 * iframe: 420
 */
import { CanvasLoading } from '@ant-design/pro-flow-editor';
import { Alert } from 'antd';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={8}>
    <CanvasLoading>
      <Alert showIcon message={'hello'} description={'world'} />
      <Alert showIcon type={'error'} message={'hello'} description={'world'} />
      <Alert showIcon type={'success'} message={'hello'} description={'world'} />
      <Alert showIcon type={'warning'} message={'hello'} description={'world'} />
    </CanvasLoading>
  </Flexbox>
);
