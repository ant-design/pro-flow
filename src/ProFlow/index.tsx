import ProFlowController from '@/ProFlowController';
import { createStyles } from 'antd-style';
import { useMemo, type CSSProperties, type MouseEvent as ReactMouseEvent } from 'react';
import ReactFlow, { Background, BackgroundVariant, Edge, Node } from 'reactflow';
import { ProFLowEdge, ProFlowNode } from './constants';
import { convertMappingFrom, getRenderData } from './helper';

const MIN_ZOOM = 0.1;

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 100%;

    .initialNode {
      padding: 0;
      box-sizing: border-box;
      width: 320px;
      height: 83px;
      border: none;
      box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 8%);
      border-radius: 8px;
      cursor: pointer;
      z-index: 1;
    }

    .selectable:focus {
      box-shadow: none !important;
    }

    .selected {
      box-shadow: none !important;
    }
  `,
}));

interface ProFlowProps {
  onNodeDragStart: (event: ReactMouseEvent, node: Node, nodes: Node[]) => void;
  onPaneClick: (event: ReactMouseEvent) => void;
  onNodeClick: (event: ReactMouseEvent, node: Node) => void;
  nodes: ProFlowNode[];
  edges: ProFLowEdge[];
  minZoom?: number;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

const ProFlow: React.FC<Partial<ProFlowProps>> = (props) => {
  const { onNodeDragStart, onPaneClick, onNodeClick, nodes, edges } = props;
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
      <ProFlowController />
      <Background id="1" gap={10} color="#f1f1f1" variant={BackgroundVariant.Lines} />
    </ReactFlow>
  );
};

export default ProFlow;
