import { FlowView, FlowViewEdge, FlowViewNode, SelectType } from '@ant-design/pro-flow';
import { useState } from 'react';
import CustomNode from './CustomerNode';
import { edges, nodes } from './data';
import './index.less';

const ProFlowDemo = () => {
  const [_nodes, setNodes] = useState<FlowViewNode[]>([...nodes]);
  const [_edges, setEdges] = useState<FlowViewEdge[]>([...edges]);

  const handleHighlight = (node: FlowViewNode) => {
    _nodes.forEach((_node) => {
      if (_node.id === node.id) {
        _node.select = SelectType.SELECT;
      }
    });
    setNodes(_nodes);
    setEdges(
      edges.map((edge) => {
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
      edges.map((edge) => {
        edge.select = SelectType.DEFAULT;
        return edge;
      }),
    );
  };

  return (
    <div className={'container'}>
      <FlowView
        onNodeDragStart={(e, node: any) => handleHighlight(node)}
        onPaneClick={handleUnHighlight}
        nodes={_nodes}
        edges={_edges}
        nodeTypes={{ textCustomNode: CustomNode }}
      ></FlowView>
    </div>
  );
};

export default ProFlowDemo;
