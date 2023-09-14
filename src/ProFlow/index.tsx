import { createStyles } from 'antd-style';
import type { CSSProperties, MouseEvent as ReactMouseEvent } from 'react';
import ReactFlow, { Edge, Node } from 'reactflow';

const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 100%;
  `,
}));

interface ProFlowProps {
  onNodeDragStart: (event: ReactMouseEvent, node: Node, nodes: Node[]) => void;
  onPaneClick: (event: ReactMouseEvent) => void;
  onNodeClick: (event: ReactMouseEvent, node: Node) => void;
  nodes: Node[];
  edges: Edge[];
  minZoom?: number;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

const ProFlow: React.FC<Partial<ProFlowProps>> = (props) => {
  const {
    onNodeDragStart,
    onPaneClick,
    onNodeClick,
    nodes,
    edges,
    minZoom = 0.1,
    className,
    style,
    children,
  } = props;
  const { styles, cx } = useStyles();

  return (
    <ReactFlow
      className={cx(styles.container, className)}
      style={style}
      onNodeDragStart={onNodeDragStart}
      onPaneClick={onPaneClick}
      onNodeClick={onNodeClick}
      nodes={nodes}
      edges={edges}
      panOnScroll
      fitView
      minZoom={minZoom}
    >
      {children}
    </ReactFlow>
  );
};

export default ProFlow;
