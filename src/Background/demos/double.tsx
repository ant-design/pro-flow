import { ProFlow } from '@/index';
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
      <ProFlow nodes={[]} edges={[]} miniMap={false} background={false}>
        <Background id="1" gap={10} color="yellow" variant={BackgroundVariant.Lines} />
        <Background id="2" gap={100} offset={1} color="red" variant={BackgroundVariant.Lines} />
      </ProFlow>
    </div>
  );
});

export default BackgroundDemo;
