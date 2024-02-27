/**
 * compact: true
 */
import {
  FlowView,
  FlowViewNode,
  SelectType,
  useEdgesState,
  useNodesState,
} from '@ant-design/pro-flow';
import CustomNode from './CustomerNode';
import { edges, nodes } from './data';
import useStyles from './index.style';

const nodeTypes = { CustomNode: CustomNode };

const ProFlowDemo = () => {
  const { styles } = useStyles();
  const [_nodes, setNodes, onNodesChange] = useNodesState([...nodes]);
  const [_edges, setEdges, onEdgesChange] = useEdgesState([...edges]);

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
    <div className={styles.container}>
      <FlowView
        onNodeDragStart={(e, node: any) => handleHighlight(node)}
        onNodeClick={(e, node: any) => handleHighlight(node)}
        onPaneClick={handleUnHighlight}
        nodes={_nodes}
        edges={_edges}
        nodeTypes={nodeTypes}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        stepLessZooming={true}
      ></FlowView>
    </div>
  );
};

export default ProFlowDemo;
