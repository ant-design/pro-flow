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
import ReactFlow, {
  BackgroundVariant,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  useViewport,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Background, FlowViewProps, Language, MiniMap, RadiusEdge } from '../index';
import DefaultNode from './components/DefaultNode';
import { FlowViewContext } from './provider/provider';
import { useStyles } from './styles';

export const FlowContext = createContext({});
const initFn = () => {};

const FlowView: React.FC<Partial<FlowViewProps>> = (props) => {
  const {
    onNodeDragStart = initFn,
    onPaneClick = initFn,
    onNodeClick = initFn,
    onEdgeClick = initFn,
    onNodesChange = initFn,
    onEdgesChange = initFn,
    nodes = [],
    edges = [],
    nodeTypes = {},
    edgeTypes = {},
    miniMap = true,
    children,
    background = true,
    autoLayout = true,
    stepLessZooming = false,
    flowProps,
    minZoom = 0.1,
    maxZoom = 2,
    className,
    layoutOptions = {
      rankdir: 'LR',
      align: 'UL',
      nodesep: 100,
      ranksep: 200,
    },
  } = props;

  const {
    miniMapPosition,
    flowDataAdapter,
    flowViewRef,
    nodes: renderNodes,
    edges: renderEdges,
  } = useContext(FlowViewContext);

  const { styles, cx } = useStyles();

  const nodeTypesMemo = useMemo(() => {
    return {
      ...nodeTypes,
      BasicNode: BasicNode,
      BasicNodeGroup: BasicNodeGroup,
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
    const _zoom = zoom ? zoom : 1;
    flowDataAdapter!(nodes, edges, _zoom, autoLayout, layoutOptions);
  }, [nodes, edges]);

  useEffect(() => {
    if (!stepLessZooming) return;
    flowDataAdapter!(nodes, edges, zoom, autoLayout, layoutOptions);
  }, [zoom]);

  const handleNodesChange = useCallback(
    (nodes: NodeChange[]) => {
      onNodesChange(nodes);
    },
    [onNodesChange],
  );

  const handleEdgesChange = useCallback(
    (edges: EdgeChange[]) => {
      onEdgesChange(edges);
    },
    [onEdgesChange],
  );

  const handleNodeDragStart = useCallback(
    (event: ReactMouseEvent, node: Node, nodes: Node[]) => {
      // TODO: 应当把事件中的 node 转换为 FlowViewNode 透出给用户
      // const {node} = transformNode(node);
      onNodeDragStart(event, node, nodes);
    },
    [onNodeDragStart],
  );

  const handleNodeDragStop = useCallback(() => {}, []);

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
    <>
      <ReactFlow
        ref={flowViewRef as any}
        className={cx(styles.container, className)}
        onNodeDragStart={handleNodeDragStart}
        onNodeDragStop={handleNodeDragStop}
        onPaneClick={handlePaneClick}
        onNodeClick={handleNodeClick}
        onEdgeClick={handleEdgeClick}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        nodes={renderNodes}
        edges={renderEdges}
        nodeTypes={nodeTypesMemo}
        edgeTypes={edgeTypesMemo}
        panOnScroll
        fitView
        minZoom={minZoom}
        maxZoom={maxZoom}
        {...flowProps}
      >
        {miniMap && (
          <MiniMap
            language={Language.zh_CN}
            position={miniMapPosition}
            className={'pro-flow-controller'}
          />
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
    </>
  );
};

export default FlowView;
