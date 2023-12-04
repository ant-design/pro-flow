import { FlowViewNode } from '@ant-design/pro-flow';
import { Progress } from 'antd';

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

export const nodes: FlowViewNode[] = [
  {
    id: 'b1',
    label: 'titleSlot-left',
    data: {
      title: 'XXX_API1',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
      titleSlot: {
        type: 'left',
        value: (
          <div className="dangerLogo">
            <img
              src={
                'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*wkEJRbSowekAAAAAAAAAAAAADvuvAQ/original'
              }
              alt=""
            />
          </div>
        ),
      },
    },
  },
  {
    id: 'b2',
    label: 'titleSlot-right',
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
    label: 'default',
    data: {
      title: 'XXX_API_b3',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
];

export const edges = [
  {
    id: 'b12',
    source: 'b1',
    target: 'b2',
  },
  {
    id: 'b23',
    source: 'b2',
    target: 'b3',
  },
];
