import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import ReactFlow, { Edge, Node } from 'reactflow';
import 'reactflow/dist/style.css';
import Background, { BackgroundVariant } from '../Background';
import { FlowViewProps, ProFlowController, RadiusEdge } from '../index';
import { FlowViewContext } from './provider/provider';
import { useStyles } from './styles';

const MIN_ZOOM = 0.1;
export const FlowContext = createContext({});
const initFn = () => {};

const FlowView: React.FC<Partial<FlowViewProps>> = (props) => {
  const {
    onNodeDragStart = initFn,
    onPaneClick = initFn,
    onNodeClick = initFn,
    onEdgeClick = initFn,
    nodes,
    edges,
    miniMap = true,
    children,
    background = true,
  } = props;
  const { miniMapPosition, flowDataAdapter } = useContext(FlowViewContext);
  const { styles, cx } = useStyles();
  const renderData = useMemo(() => {
    if (nodes?.length && flowDataAdapter) {
      const _edges = edges?.length ? edges : [];
      return flowDataAdapter!(nodes!, _edges);
    } else {
      return {
        nodes: [],
        edges: [],
      };
    }
  }, [nodes, edges, flowDataAdapter]);

  const handleNodeDragStart = useCallback(
    (event: ReactMouseEvent, node: Node, nodes: Node[]) => {
      // TODO: 应当把事件中的 node 转换为 FlowViewNode 透出给用户
      // const {node} = transformNode(node);
      onNodeDragStart(event, node, nodes);
    },
    [onNodeDragStart],
  );

  const handlePaneClick = useCallback(
    (event: ReactMouseEvent) => {
      // TODO: 应当把事件中的 node 转换为 FlowViewNode 透出给用户
      // const {node} = transformNode(node);
      onPaneClick(event);
    },
    [onPaneClick],
  );

  const handleNodeClick = useCallback(
    (event: ReactMouseEvent, node: Node) => {
      // TODO: 应当把事件中的 node 转换为 FlowViewNode 透出给用户
      // const {node} = transformNode(node);
      onNodeClick(event, node);
    },
    [onNodeClick],
  );

  const handleEdgeClick = useCallback(
    (event: ReactMouseEvent, edge: Edge) => {
      // TODO: 应当把事件中的 node 转换为 FlowViewNode 透出给用户
      // const {node} = transformNode(node);
      handleEdgeClick(event, edge);
    },
    [onEdgeClick],
  );

  // TODO: 要把loading状态包掉，要把空状态包掉。
  return (
    <ReactFlow
      className={cx(styles.container)}
      onNodeDragStart={handleNodeDragStart}
      onPaneClick={handlePaneClick}
      onNodeClick={handleNodeClick}
      onEdgeClick={handleEdgeClick}
      nodes={renderData.nodes}
      edges={renderData.edges}
      edgeTypes={{
        radiusEdge: RadiusEdge,
      }}
      panOnScroll
      fitView
      minZoom={MIN_ZOOM}
    >
      {miniMap && (
        <ProFlowController position={miniMapPosition} className={'pro-flow-controller'} />
      )}
      {children}
      {background && (
        <Background
          style={{ backgroundColor: '#F7F8FA' }}
          gap={10}
          color="#bac3d4"
          variant={BackgroundVariant.Dots}
        />
      )}
    </ReactFlow>
  );
};

export default FlowView;
