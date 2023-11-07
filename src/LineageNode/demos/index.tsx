import { FlowViewEdge, FlowViewNode, NodeSelect } from '@/index';
import { ProFlow } from '@ant-design/pro-flow';
import { Progress } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import styled from 'styled-components';

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

const nodes: FlowViewNode[] = [
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

const edges = [
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

const ProFlowDemo = () => {
  const [_nodes, setNodes] = useState<FlowViewNode[]>(nodes);
  const [_edges, setEdges] = useState<FlowViewEdge[]>(edges);
  const { styles } = useStyles();

  const handleHighlight = (node: FlowViewNode) => {
    setNodes(
      _nodes.map((_node) => {
        if (_node.id === node.id) {
          _node.select = NodeSelect.SELECT;
        }
        return _node;
      }),
    );
    setEdges(
      _edges.map((edge) => {
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
    setNodes(
      _nodes.map((_node) => {
        _node.select = NodeSelect.DEFAULT;
        return _node;
      }),
    );
    setEdges(
      _edges.map((edge) => {
        edge.select = NodeSelect.DEFAULT;
        return edge;
      }),
    );
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
  return <ProFlowDemo />;
};

export default FlowDemo;
