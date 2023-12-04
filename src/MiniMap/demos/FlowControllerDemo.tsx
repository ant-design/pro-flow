import { FlowView, MiniMap } from '@ant-design/pro-flow';
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
      <FlowView
        nodes={[
          {
            id: 'a1',
            label: 'default',
            data: {
              title: 'XXX_API_b3',
              logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
              describe: 'XXX_XXX_XXX_API',
            },
          },
        ]}
        edges={[]}
        miniMap={false}
      >
        <MiniMap position={{ x: 0, y: 0 }} />
      </FlowView>
    </div>
  );
});

export default FlowControllerDemo;
