import BasicNodeGroup from '@/BasicGroupNode';
import BasicNode from '@/BasicNode';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import ReactFlow, { BackgroundVariant, Edge, Node, useViewport } from 'reactflow';
import 'reactflow/dist/style.css';
import { Background, FlowViewProps, ProFlowController, RadiusEdge } from '../index';
import DefaultNode from './components/DefaultNode';
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
    nodes = [],
    edges = [],
    nodeTypes = {},
    edgeTypes = {},
    miniMap = true,
    children,
    background = true,
    autoLayout = true,
  } = props;
  const {
    miniMapPosition,
    flowDataAdapter,
    nodes: renderNodes,
    edges: renderEdges,
  } = useContext(FlowViewContext);
  const { styles, cx } = useStyles();
  const nodeTypesMemo = useMemo(() => {
    return {
      ...nodeTypes,
      lineage: BasicNode,
      lineageGroup: BasicNodeGroup,
      default: DefaultNode,
    };
  }, []);
  const edgeTypesMemo = useMemo(() => {
    return {
      ...edgeTypes,
      radius: RadiusEdge,
    };
  }, []);
  const { zoom } = useViewport();

  useEffect(() => {
    flowDataAdapter!(nodes, edges, zoom, autoLayout);
  }, [nodes, edges, zoom]);

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
      onEdgeClick(event, edge);
    },
    [onEdgeClick],
  );

  return (
    <ReactFlow
      className={cx(styles.container)}
      onNodeDragStart={handleNodeDragStart}
      onPaneClick={handlePaneClick}
      onNodeClick={handleNodeClick}
      onEdgeClick={handleEdgeClick}
      nodes={renderNodes}
      edges={renderEdges}
      nodeTypes={nodeTypesMemo}
      edgeTypes={edgeTypesMemo}
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
