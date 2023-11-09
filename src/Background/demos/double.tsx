import { FlowView } from '@/index';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import Background, { BackgroundVariant } from '..';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 600px;
  `,
}));

const BackgroundDemo = memo(() => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={[]} edges={[]} miniMap={false} background={false}>
        <Background id="1" gap={10} color="yellow" variant={BackgroundVariant.Lines} />
        <Background id="2" gap={100} offset={1} color="red" variant={BackgroundVariant.Lines} />
      </FlowView>
    </div>
  );
});

export default BackgroundDemo;
