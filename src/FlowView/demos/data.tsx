import { FlowViewEdge, FlowViewNode } from '@ant-design/pro-flow';
import { Progress } from 'antd';
import useStyles from './index.style';

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

const DangerLogo: React.FC = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.dangerLogo}>
      <img
        src={
          'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*wkEJRbSowekAAAAAAAAAAAAADvuvAQ/original'
        }
        alt=""
      />
    </div>
  );
};

export const nodes: FlowViewNode[] = [
  {
    id: 'a1',
    label: '12345',
    data: {
      title: 'XXX_API_ddddddddddddddddddddddddddddddddddddddddddddddddddddddb1',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'b1',
    label: 'label',
    data: {
      title: 'XXX_API_ddddddddddddddddddddddddddddddddddddddddddddddddddddddb1',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
      titleSlot: {
        type: 'left',
        value: <DangerLogo />,
      },
    },
  },
  {
    id: 'b2',
    data: {
      title: 'XXX_APIddddddddddddddddddddddddddddddddddddddddddddddddddd_b2',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
      titleSlot: {
        type: 'right',
        value: <ApiScore score={4} />,
      },
    },
  },
  {
    id: 'b3',
    data: {
      title: 'XXX_APIddddddddddddddddddddddddddddddddddddddddddddddddddd_b2',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'b4',
    data: {
      title: 'XXX_API_b4',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'c1',
    data: {
      title: 'XXXX产品',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original',
      description: '2031030213014',
    },
  },
  {
    id: 'd1',
    label: '456',
    type: 'BasicNodeGroup',
    data: [
      {
        id: 'a5',
        data: {
          title: 'XXX数据源',
          describe: 'cksadjfnf',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original',
        },
      },
      {
        id: 'a6',
        data: {
          title: 'XXX_API',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
          describe: 'XXX_XXX_XXX_API',
        },
      },
      {
        id: 'a7',
        data: {
          title: 'XXXX产品',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original',
          describe: '2031030213014',
        },
      },
      {
        id: 'a8',
        data: {
          title: 'XXX数据源',
          describe: 'cksadjfnf',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original',
        },
      },
      {
        id: 'a9',
        data: {
          title: 'XXX_API',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
          describe: 'XXX_XXX_XXX_API',
        },
      },
      {
        id: 'a10',
        data: {
          title: 'XXXX产品',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original',
          describe: '2031030213014',
        },
      },
      {
        id: 'a11',
        data: {
          title: 'XXXX产品',
          logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original',
          describe: '2031030213014',
        },
      },
    ],
  },
];

export const edges: FlowViewEdge[] = [
  {
    id: 'a1-b1',
    source: 'a1',
    target: 'b1',
  },
  {
    id: 'a1-b2',
    source: 'a1',
    target: 'b2',
  },
  {
    id: 'a1-b3',
    source: 'a1',
    target: 'b3',
  },
  {
    id: 'a1-b4',
    source: 'a1',
    target: 'b4',
  },

  {
    id: 'b2-c1',
    source: 'b2',
    target: 'c1',
    type: 'radius',
  },
  {
    id: 'b3-c1',
    source: 'b3',
    target: 'c1',
    type: 'radius',
  },
  {
    id: 'b1-c1',
    source: 'b1',
    target: 'c1',
    type: 'radius',
  },
  {
    id: 'b4-c1',
    source: 'b4',
    target: 'c1',
    type: 'radius',
  },
  {
    id: 'c1-d1',
    source: 'c1',
    target: 'd1',
    type: 'radius',
  },
];
