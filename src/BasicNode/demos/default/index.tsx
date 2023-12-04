/**
 * compact: true
 */
import { FlowView, FlowViewEdge, FlowViewNode, SelectType } from '@ant-design/pro-flow';
import { createStyles } from 'antd-style';
import { useState } from 'react';
import { edges, nodes } from './data';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 600px;
    .ant-progress-text {
      text-align: center !important;
    }
  `,
}));

const ProFlowDemo = () => {
  const [_nodes, setNodes] = useState<FlowViewNode[]>(nodes);
  const [_edges, setEdges] = useState<FlowViewEdge[]>(edges);
  const { styles } = useStyles();

  const handleHighlight = (node: FlowViewNode) => {
    setNodes(
      _nodes.map((_node) => {
        if (_node.id === node.id) {
          _node.select = SelectType.SELECT;
        }
        return _node;
      }),
    );
    setEdges(
      _edges.map((edge) => {
        if (edge.source === node.id || edge.target === node.id) {
          edge.select = SelectType.SUB_SELECT;
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
        _node.select = SelectType.DEFAULT;
        return _node;
      }),
    );
    setEdges(
      _edges.map((edge) => {
        edge.select = SelectType.DEFAULT;
        return edge;
      }),
    );
  };

  return (
    <div className={styles.container}>
      <FlowView
        onNodeDragStart={(e, node: any) => handleHighlight(node)}
        onPaneClick={handleUnHighlight}
        nodes={_nodes}
        edges={_edges}
      ></FlowView>
    </div>
  );
};

const FlowDemo = () => {
  return <ProFlowDemo />;
};

export default FlowDemo;
