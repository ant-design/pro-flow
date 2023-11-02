import { ProFlow } from '@/index';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import FlowPanel from '..';

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
      <ProFlow nodes={[]} edges={[]} miniMap={false}>
        <FlowPanel position="top-left">top-left</FlowPanel>
        <FlowPanel position="top-center">top-center</FlowPanel>
        <FlowPanel position="top-right">top-right</FlowPanel>
        <FlowPanel position="bottom-left">bottom-left</FlowPanel>
        <FlowPanel position="bottom-center">bottom-center</FlowPanel>
        <FlowPanel position="bottom-right">bottom-right</FlowPanel>
      </ProFlow>
    </div>
  );
});

export default FlowControllerDemo;
