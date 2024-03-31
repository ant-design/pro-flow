/**
 * compact: true
 */
import {
  FlowView,
  FlowViewNode,
  Inspector,
  SelectType,
  useEdgesState,
  useNodesState,
} from '@ant-design/pro-flow';
import { useCallback, useMemo, useState } from 'react';
import { edges, nodes } from './data';
import {
  formatEdgeMapping,
  formatNodeMapping,
  getAllHighLightNode,
  setEdgeDanger,
  setNodeDanger,
} from './helper';
import useStyles from './styled';

const ProFlowDemo = () => {
  const { styles } = useStyles();
  const [current, setCurrent] = useState(0);
  const [_nodes, setNodes, onNodesChange] = useNodesState([...nodes]);
  const [_edges, setEdges, onEdgesChange] = useEdgesState([...edges]);
  const edgeMapping = useMemo(() => {
    const mapping = formatEdgeMapping(_nodes, _edges);
    return setEdgeDanger(mapping);
  }, [_nodes, _edges]);
  const nodeMapping = useMemo(() => {
    const mapping = formatNodeMapping(_nodes, _edges);
    return setNodeDanger(mapping);
  }, [_nodes, _edges]);

  const renderData = useMemo(() => {
    return {
      nodes: Object.values(nodeMapping),
      edges: Object.values(edgeMapping),
    };
  }, [nodeMapping, edgeMapping]);

  const handleHighlight = useCallback(
    (node: FlowViewNode) => {
      handleUnHighlight();
      setCurrent(node.id);
      const highNodes = getAllHighLightNode(nodeMapping, node.id);
      _nodes.forEach((_node) => {
        if (highNodes.find((item) => item.id === _node.id)) {
          _node.select = SelectType.SUB_SELECT;
        }
        if (_node.id === node.id) {
          _node.select = SelectType.SELECT;
        }
      });

      setNodes(_nodes);
      setEdges(
        edges.map((edge) => {
          if (
            highNodes.find((item) => item.id === edge.source) &&
            highNodes.find((item) => item.id === edge.target)
          ) {
            edge.select = SelectType.SUB_SELECT;
          }
          return {
            ...edge,
          };
        }),
      );
    },
    [nodeMapping],
  );

  const handleUnHighlight = () => {
    setCurrent(0);
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
        onPaneClick={handleUnHighlight}
        nodes={renderData.nodes}
        edges={renderData.edges}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        stepLessZooming={true}
        miniMap={false}
      >
        <Inspector
          title={`Current Node - ${current}`}
          width={250}
          open={!!current}
          onClick={() => setCurrent(0)}
        />
      </FlowView>
    </div>
  );
};

export default ProFlowDemo;
