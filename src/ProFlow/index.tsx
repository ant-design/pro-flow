import React, { useCallback, useMemo, type MouseEvent as ReactMouseEvent } from 'react';
import ReactFlow, { Background, BackgroundVariant, Edge, Node } from 'reactflow';
import 'reactflow/dist/style.css';
import { ProFlowController, ProFlowProps, RadiusEdge } from '../index';
import { convertMappingFrom, getRenderData } from './helper';
import { useStyles } from './styles';

const MIN_ZOOM = 0.1;

const initFn = () => {};

const ProFlow: React.FC<Partial<ProFlowProps>> = (props) => {
  const {
    onNodeDragStart = initFn,
    onPaneClick = initFn,
    onNodeClick = initFn,
    nodes,
    edges,
    miniMap = true,
  } = props;
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
  // const [_edges] = useEdgesState(renderData.edges);

  const handleNodeDragStart = useCallback(
    (event: ReactMouseEvent, node: Node, nodes: Node[]) => {
      // TODO: 应当把事件中的 node 转换为 ProFlowNode 透出给用户
      // const {node} = transformNode(node);
      onNodeDragStart(event, node, nodes);
    },
    [onNodeDragStart],
  );

  const handlePaneClick = useCallback(
    (event: ReactMouseEvent) => {
      // TODO: 应当把事件中的 node 转换为 ProFlowNode 透出给用户
      // const {node} = transformNode(node);
      onPaneClick(event);
    },
    [onPaneClick],
  );

  const handleNodeClick = useCallback(
    (event: ReactMouseEvent, node: Node) => {
      // TODO: 应当把事件中的 node 转换为 ProFlowNode 透出给用户
      // const {node} = transformNode(node);
      onNodeClick(event, node);
    },
    [onNodeClick],
  );

  // TODO: 要把loading状态包掉，要把空状态包掉。
  return (
    <ReactFlow
      className={cx(styles.container)}
      onNodeDragStart={handleNodeDragStart}
      onPaneClick={handlePaneClick}
      onNodeClick={handleNodeClick}
      nodes={renderData.nodes}
      edges={renderData.edges}
      edgeTypes={{
        radiusEdge: RadiusEdge,
      }}
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
