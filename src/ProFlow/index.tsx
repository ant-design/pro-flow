import ProFlowController from '@/ProFlowController';
import { useMemo, type CSSProperties, type MouseEvent as ReactMouseEvent } from 'react';
import ReactFlow, { Background, BackgroundVariant, Edge, Node } from 'reactflow';
import { ProFLowEdge, ProFlowNode } from './constants';
import { convertMappingFrom, getRenderData } from './helper';
import { useStyles } from './styles';

const MIN_ZOOM = 0.1;

interface ProFlowProps {
  onNodeDragStart: (event: ReactMouseEvent, node: Node, nodes: Node[]) => void;
  onPaneClick: (event: ReactMouseEvent) => void;
  onNodeClick: (event: ReactMouseEvent, node: Node) => void;
  nodes: ProFlowNode[];
  edges: ProFLowEdge[];
  className?: string;
  style?: CSSProperties;
  miniMap?: boolean;
}

const ProFlow: React.FC<Partial<ProFlowProps>> = (props) => {
  const { onNodeDragStart, onPaneClick, onNodeClick, nodes, edges, miniMap = true } = props;
  const { styles, cx } = useStyles();
  const mapping = convertMappingFrom(nodes!, edges!);
  const renderData = useMemo((): {
    nodes: Node[];
    edges: Edge[];
  } => {
    if (mapping) {
      const { nodes, edges } = getRenderData(mapping);

      return {
        nodes,
        edges,
      };
    } else {
      return {
        nodes: [],
        edges: [],
      };
    }
  }, [mapping]);

  return (
    <ReactFlow
      className={cx(styles.container)}
      onNodeDragStart={onNodeDragStart}
      onPaneClick={onPaneClick}
      onNodeClick={onNodeClick}
      nodes={renderData.nodes}
      edges={renderData.edges}
      panOnScroll
      fitView
      minZoom={MIN_ZOOM}
    >
      {miniMap && <ProFlowController />}
      <Background id="1" gap={10} color="#f1f1f1" variant={BackgroundVariant.Lines} />
    </ReactFlow>
  );
};

export default ProFlow;
