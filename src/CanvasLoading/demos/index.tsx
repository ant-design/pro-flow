/**
 * iframe: 420
 */
import { Alert } from 'antd';
import { CanvasLoading } from 'kitchen-flow-editor';
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
