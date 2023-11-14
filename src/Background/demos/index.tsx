import { Background, BackgroundVariant, FlowPanel, FlowView } from '@ant-design/pro-flow';
import { Button } from 'antd';
import { createStyles } from 'antd-style';
import { memo, useState } from 'react';

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
      <FlowView nodes={[]} edges={[]} miniMap={false} background={false}>
        <FlowPanel position={'top-left'}>
          <div>variant:</div>
          <Button onClick={() => setVariant(BackgroundVariant.Dots)}>dots</Button>
          <Button onClick={() => setVariant(BackgroundVariant.Lines)}>lines</Button>
          <Button onClick={() => setVariant(BackgroundVariant.Cross)}>cross</Button>
        </FlowPanel>
        <Background variant={variant} />
      </FlowView>
    </div>
  );
});

export default BackgroundDemo;
