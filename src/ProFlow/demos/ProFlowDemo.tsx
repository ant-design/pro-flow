import { createStyles } from 'antd-style';
import { memo } from 'react';
import ProFlow from '..';
import { NodeSelect, ProFlowNode } from '../constants';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 600px;
  `,
}));

const nodes: ProFlowNode[] = [
  {
    id: 'a1',
    type: 'BloodNode',
    select: NodeSelect.SELECT,
    data: {
      title: 'XXX数据源',
      describe: 'cksadjfnf',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original',
    },
  },
  {
    id: 'a2',
    type: 'BloodNode',
    select: NodeSelect.DANGER,
    data: {
      title: 'XXX_API',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a3',
    type: 'BloodNode',
    select: NodeSelect.WARNING,
    data: {
      title: 'XXXX产品',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original',
      describe: '2031030213014',
    },
  },
];

const edges = [
  {
    id: 'a1-a2',
    source: 'a1',
    target: 'a2',
  },
  {
    id: 'a2-a3',
    source: 'a2',
    target: 'a3',
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
