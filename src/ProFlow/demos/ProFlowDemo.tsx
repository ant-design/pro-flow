import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Background, BackgroundVariant } from 'reactflow';
import ProFlow from '..';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 600px;
  `,
}));

const ProFlowDemo = memo(() => {
  const { styles } = useStyles();
  return (
    <div className={styles.container}>
      <ProFlow>
        <Background id="1" gap={10} color="#f1f1f1" variant={BackgroundVariant.Lines} />
      </ProFlow>
    </div>
  );
});

export default ProFlowDemo;
