/**
 * compact: true
 */
import {
  FlowPanel,
  FlowView,
  FlowViewNode,
  Inspector,
  Language,
  MiniMap,
  SelectType,
  useEdgesState,
  useNodesState,
} from '@ant-design/pro-flow';
import { Button } from 'antd';
import { useState } from 'react';
import { edges, nodes } from './data';
import useStyles from './index.style';

const ProFlowDemo = () => {
  const { styles } = useStyles();
  const [_nodes, setNodes, onNodesChange] = useNodesState([...nodes]);
  const [_edges, setEdges, onEdgesChange] = useEdgesState([...edges]);
  const [open, setOpen] = useState(false);

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
    setOpen(false);
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
    <div className={styles.container}>
      <FlowView
        onNodeDragStart={(e, node: any) => handleHighlight(node)}
        onNodeClick={(e, node: any) => handleHighlight(node)}
        onPaneClick={handleUnHighlight}
        nodes={_nodes}
        edges={_edges}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        miniMap={false}
      >
        <FlowPanel>
          <Button onClick={() => setOpen(true)}>OPEN</Button>
        </FlowPanel>
        <Inspector open={open} onClose={() => setOpen(false)} width={300} title={'Inspector'}>
          <div>Inspector</div>
          <div>Inspector</div>
          <div>Inspector</div>
          <div>Inspector</div>
          <div>Inspector</div>
        </Inspector>
        <MiniMap language={Language.en_US} />
      </FlowView>
    </div>
  );
};

export default ProFlowDemo;
