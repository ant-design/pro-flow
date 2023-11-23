import { createStyles } from 'antd-style';
import { memo } from 'react';
import LineageNode from '..';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    background-color: #f1f1f1;
    padding: 20px 20px 5px 20px;
    position: relative;
  `,

  node: css`
    position: relative;
    margin-bottom: 15px;
  `,
}));

const nodeList = [
  {
    title: 'XXX数据源',
    logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original',
    description: 'cksadjfnf',
  },
  {
    title: 'XXX_API',
    logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
    description: 'XXX_XXX_XXX_API',
  },
  {
    title: 'XXXX产品',
    logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original',
    description: '2031030213014',
  },
  {
    title: 'XXXX用户',
    logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*CsNGRI1dY1wAAAAAAAAAAAAADvuvAQ/original',
    description: '23986104595',
  },
  {
    title: 'XXX供应商',
    logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*wS62Qr4Ez_kAAAAAAAAAAAAADvuvAQ/original',
    description: '1283184585',
  },
];

const NodeList = memo(() => {
  const { styles, cx } = useStyles();

  return (
    <div className={cx(styles.container)}>
      {nodeList.map((item) => {
        return (
          <LineageNode
            key={item.title}
            data={{
              className: styles.node,
              title: item.title,
              logo: item.logo,
              description: item.description,
            }}
          />
        );
      })}
    </div>
  );
});

export default NodeList;
