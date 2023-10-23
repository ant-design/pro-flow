import { EdgeType, NodeSelect, ProFlowNode } from '@/index';
import { Progress } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import styled from 'styled-components';
import ProFlow from '..';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 600px;
    .ant-progress-text {
      text-align: center !important;
    }
  `,
}));

const ApiScore: React.FC<{ score: number }> = ({ score }) => {
  return (
    <Progress
      style={{
        fontSize: '6px',
        textAlign: 'center',
      }}
      type="circle"
      trailColor={'white'}
      percent={score === 0 ? 1 : score * 20}
      strokeColor={score * 20 > 60 ? '#30a46c' : '#e5484d'}
      format={() => `${score}`}
      size={[28, 6]}
    />
  );
};

const DangerLogo = styled.div`
  width: 28px;
  height: 16px;
  background: #ffeef1;
  border-radius: 7px;

  margin-top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 8px;
    height: 9px;
  }
`;

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
    id: 'b1',
    select: NodeSelect.SUB_SELECT,
    data: {
      title: 'XXX_API_ddddddddddddddddddddddddddddddddddddddddddddddddddddddb1',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
      titleSlot: {
        type: 'left',
        value: (
          <DangerLogo>
            <img
              src={
                'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*wkEJRbSowekAAAAAAAAAAAAADvuvAQ/original'
              }
              alt=""
            />
          </DangerLogo>
        ),
      },
    },
  },
  {
    id: 'b2',
    select: NodeSelect.SUB_DANGER,
    data: {
      title: 'XXX_APIddddddddddddddddddddddddddddddddddddddddddddddddddd_b2',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
      titleSlot: {
        type: 'right',
        value: <ApiScore score={4} />,
      },
    },
  },
  {
    id: 'b3',
    select: NodeSelect.SUB_WARNING,
    data: {
      title: 'XXX_API_b3',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'b4',
    select: NodeSelect.DEFAULT,
    data: {
      title: 'XXX_API_b4',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'c1',
    select: NodeSelect.WARNING,
    data: {
      title: 'XXXX产品',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original',
      describe: '2031030213014',
    },
  },
  {
    id: 'd1',
    group: true,
    select: NodeSelect.SUB_SELECT,
    label: '456',
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
    id: 'a1-b1',
    source: 'a1',
    select: NodeSelect.SUB_WARNING,
    target: 'b1',
    type: EdgeType.default,
  },
  {
    id: 'a1-b2',
    source: 'a1',
    select: NodeSelect.SUB_WARNING,
    target: 'b2',
    type: EdgeType.default,
  },
  {
    id: 'a1-b3',
    source: 'a1',
    select: NodeSelect.SUB_DANGER,
    target: 'b3',
    type: EdgeType.default,
  },
  {
    id: 'a1-b4',
    source: 'a1',
    select: NodeSelect.SUB_SELECT,
    target: 'b4',
    type: EdgeType.default,
  },

  {
    id: 'b2-c1',
    source: 'b2',
    select: NodeSelect.WARNING,
    target: 'c1',
    type: EdgeType.default,
  },
  {
    id: 'b3-c1',
    source: 'b3',
    select: NodeSelect.WARNING,
    target: 'c1',
    type: EdgeType.default,
  },
  {
    id: 'b1-c1',
    source: 'b1',
    select: NodeSelect.WARNING,
    target: 'c1',
    type: EdgeType.default,
  },
  {
    id: 'b4-c1',
    source: 'b4',
    select: NodeSelect.WARNING,
    target: 'c1',
    type: EdgeType.default,
  },
  {
    id: 'c1-d1',
    source: 'c1',
    select: NodeSelect.WARNING,
    target: 'd1',
    type: EdgeType.default,
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
