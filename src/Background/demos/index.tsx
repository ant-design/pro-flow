import { ProFlow } from '@/index';
import { createStyles } from 'antd-style';
import { memo, useState } from 'react';
import { Panel } from 'reactflow';
import Background, { BackgroundVariant } from '..';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 600px;
  `,
}));

const BackgroundDemo = memo(() => {
  const [variant, setVariant] = useState<BackgroundVariant>(BackgroundVariant.Cross);
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <ProFlow nodes={[]} edges={[]} miniMap={false} background={false}>
        <Panel position={'top-left'}>
          <div>variant:</div>
          <button type="button" onClick={() => setVariant(BackgroundVariant.Dots)}>
            dots
          </button>
          <button type="button" onClick={() => setVariant(BackgroundVariant.Lines)}>
            lines
          </button>
          <button type="button" onClick={() => setVariant(BackgroundVariant.Cross)}>
            cross
          </button>
        </Panel>
        <Background variant={variant} />
      </ProFlow>
    </div>
  );
});

export default BackgroundDemo;
