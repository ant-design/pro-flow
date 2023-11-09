import { FlowView, ProFlowController } from '@/index';
import { createStyles } from 'antd-style';
import { memo } from 'react';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 600px;
  `,
}));

const FlowControllerDemo = memo(() => {
  const { styles } = useStyles();
  return (
    <div className={styles.container}>
      <FlowView nodes={[]} edges={[]} miniMap={false}>
        <ProFlowController position={{ x: 200, y: 50 }} />
      </FlowView>
    </div>
  );
});

export default FlowControllerDemo;
