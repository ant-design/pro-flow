import { NodeSelect, ProFlowEdge, ProFlowNode } from '@/index';
import { Progress } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ProFlow } from '../../index';
import { FlowViewProvider } from '../provider/FlowViewProvider';

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
    label: '123',
    data: {
      title: 'XXX数据源',
      describe: 'cksadjfnf',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*jWDsQ5GTmHMAAAAAAAAAAAAADvuvAQ/original',
    },
  },
  {
    id: 'b1',
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
    data: {
      title: 'XXX_API_b3',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'b4',
    data: {
      title: 'XXX_API_b4',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'c1',
    data: {
      title: 'XXXX产品',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*ezaYT4wYRBwAAAAAAAAAAAAADvuvAQ/original',
      describe: '2031030213014',
    },
  },
  {
    id: 'd1',
    group: true,
    label: '456',
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

const edges: ProFlowEdge[] = [
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
  },
  {
    id: 'b3-c1',
    source: 'b3',
    target: 'c1',
  },
  {
    id: 'b1-c1',
    source: 'b1',
    target: 'c1',
  },
  {
    id: 'b4-c1',
    source: 'b4',
    target: 'c1',
  },
  {
    id: 'c1-d1',
    source: 'c1',
    target: 'd1',
  },
];

const ProFlowDemo = () => {
  const [_nodes, setNodes] = useState<ProFlowNode[]>([...nodes]);
  const [_edges, setEdges] = useState<ProFlowEdge[]>([...edges]);
  const { styles } = useStyles();

  const handleHighlight = (node: ProFlowNode) => {
    setEdges(
      edges.map((edge) => {
        if (edge.source === node.id || edge.target === node.id) {
          edge.select = NodeSelect.SUB_SELECT;
        }
        return {
          ...edge,
        };
      }),
    );
  };

  const handleUnHighlight = () => {
    setNodes(nodes);
    setEdges(edges);
  };

  return (
    <div className={styles.container}>
      <ProFlow
        onNodeDragStart={(e, node: any) => handleHighlight(node)}
        onPaneClick={handleUnHighlight}
        nodes={_nodes}
        edges={_edges}
      ></ProFlow>
    </div>
  );
};

const FlowDemo = () => {
  return (
    <FlowViewProvider>
      <ProFlowDemo />
    </FlowViewProvider>
  );
};

export default FlowDemo;