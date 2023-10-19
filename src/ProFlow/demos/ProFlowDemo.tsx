import { NodeSelect, ProFlowNode } from '@/index';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import ProFlow from '..';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 600px;
  `,
}));

const nodes: ProFlowNode[] = [
  {
    id: 'a1',
    select: NodeSelect.SELECT,
    label: '123',
    data: {
      title: 'XXX数据源',
      describe: 'cksadjfnf',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original',
    },
  },
  {
    id: 'a2',
    select: NodeSelect.DANGER,
    data: {
      title: 'XXX_API',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'b1',
    select: NodeSelect.DANGER,
    data: {
      title: 'XXX_API',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a3',
    select: NodeSelect.WARNING,
    data: {
      title: 'XXXX产品',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original',
      describe: '2031030213014',
    },
  },
  {
    id: 'a4',
    group: true,
    select: NodeSelect.WARNING,
    data: [
      {
        id: 'a5',
        select: NodeSelect.SELECT,
        data: {
          title: 'XXX数据源',
          describe: 'cksadjfnf',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original',
        },
      },
      {
        id: 'a6',
        select: NodeSelect.DANGER,
        data: {
          title: 'XXX_API',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
          describe: 'XXX_XXX_XXX_API',
        },
      },
      {
        id: 'a7',
        select: NodeSelect.WARNING,
        data: {
          title: 'XXXX产品',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original',
          describe: '2031030213014',
        },
      },
      {
        id: 'a8',
        select: NodeSelect.SELECT,
        data: {
          title: 'XXX数据源',
          describe: 'cksadjfnf',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original',
        },
      },
      {
        id: 'a9',
        select: NodeSelect.DANGER,
        data: {
          title: 'XXX_API',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
          describe: 'XXX_XXX_XXX_API',
        },
      },
      {
        id: 'a10',
        select: NodeSelect.WARNING,
        data: {
          title: 'XXXX产品',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original',
          describe: '2031030213014',
        },
      },
      {
        id: 'a11',
        select: NodeSelect.WARNING,
        data: {
          title: 'XXXX产品',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original',
          describe: '2031030213014',
        },
      },
    ],
  },
];

const edges = [
  {
    id: 'a1-a2',
    source: 'a1',
    target: 'a2',
  },
  {
    id: 'a1-b1',
    source: 'a1',
    target: 'b1',
  },
  {
    id: 'a2-a3',
    source: 'a2',
    target: 'a3',
  },
  {
    id: 'a3-a4',
    source: 'a3',
    target: 'a4',
  },
];

const ProFlowDemo = memo(() => {
  const { styles } = useStyles();
  return (
    <div className={styles.container}>
      <ProFlow nodes={nodes} edges={edges} />
    </div>
  );
});

export default ProFlowDemo;
