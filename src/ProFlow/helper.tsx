import BloodNodeGroup from '@/BloodGroupNode';
import BloodNode from '@/BloodNode';
import { ProFlowEdge, ProFlowNode, ProFlowNodeData } from '@/constants';
import Dagre from '@dagrejs/dagre';
import { cx } from 'antd-style';
import { Edge, Node, Position } from 'reactflow';
import {
  EDGE_DANGER,
  EDGE_SELECT,
  EDGE_SUB_DANGER,
  EDGE_SUB_SELECT,
  EDGE_SUB_WARNING,
  EDGE_WARNING,
  INIT_NODE,
  InitialNode,
  NodeMapItem,
  NodeMapping,
  NodeSelect,
} from './constants';

function getTypeFromEdge(node: NodeMapItem) {
  if (node.left?.length && node.right?.length) {
    return 'default';
  }
  if (node.left?.length) {
    return 'output';
  }
  if (node.right?.length) {
    return 'input';
  }
  return 'default';
}

export function convertMappingFrom(nodes: ProFlowNode[], edges: ProFlowEdge[], zoom: number) {
  const mapping: NodeMapping = {};
  nodes.forEach((node) => {
    mapping[node.id] = {
      id: node.id,
      group: node.group,
      width: node.group ? 355 : 322,
      height: node.group ? 1100 : 85,
      data: node.data,
      select: node.select,
      right: [],
      left: [],
      zoom,
      label: node.label,
    };
  });

  edges.forEach((edge) => {
    const { source, target } = edge;
    mapping[source].right?.push(target);
    mapping[target].left?.push(source);
  });

  return mapping;
}

export function setNodePosition(nodes: Node[], edges: Edge[]) {
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

  g.setGraph({
    rankdir: 'LR',
    align: 'UL',
  });

  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node) => g.setNode(node.id, node as InitialNode));

  Dagre.layout(g);

  return {
    _nodes: nodes.map((node) => {
      const { x, y } = g.node(node.id);
      return {
        ...node,
        position: {
          x: x * 1.3,
          y: y * 1,
        },
      };
    }) as unknown as Node[],
    _edges: edges,
  };
}

function sortEdges(edges: Edge[]) {
  const highEdges: Edge[] = edges.filter((item) => {
    return item.className?.includes('edgeSelected') || item.className?.includes('edgeSubSelected');
  });
  const midEdges: Edge[] = edges.filter(
    (item) => item.className?.includes('edgeDanger') || item.className?.includes('edgeSubDanger'),
  );
  const lowEdges: Edge[] = edges.filter(
    (item) =>
      !item.className?.includes('edgeSelected') &&
      !item.className?.includes('edgeSubSelected') &&
      !item.className?.includes('edgeDanger') &&
      !item.className?.includes('edgeSubDanger'),
  );

  return [...lowEdges, ...midEdges, ...highEdges];
}

function getEdgeClsFromNodeSelect(select: NodeSelect) {
  switch (select) {
    case NodeSelect.SELECT:
      return EDGE_SELECT;
    case NodeSelect.SUB_SELECT:
      return EDGE_SUB_SELECT;
    case NodeSelect.DANGER:
      return EDGE_DANGER;
    case NodeSelect.SUB_DANGER:
      return EDGE_SUB_DANGER;
    case NodeSelect.WARNING:
      return EDGE_WARNING;
    case NodeSelect.SUB_WARNING:
      return EDGE_SUB_WARNING;
    default:
      return 'edgeDefault';
  }
}

// function getEdgeLevel(select: NodeSelect) {
//   switch (select) {
//     case NodeSelect.SELECT:
//       return 6;
//     case NodeSelect.SUB_SELECT:
//       return 5;
//     case NodeSelect.DANGER:
//       return 4;
//     case NodeSelect.SUB_DANGER:
//       return 3;
//     case NodeSelect.WARNING:
//       return 2;
//     case NodeSelect.SUB_WARNING:
//       return 1;
//     default:
//       return 0;
//   }
// }

export function getRenderEdges(edges: ProFlowEdge[]) {
  return edges.map((edge) => {
    const { source, target, select = NodeSelect.DEFAULT } = edge;

    return {
      id: `${source}-${target}`,
      source,
      target,
      type: 'smoothstep',
      className: getEdgeClsFromNodeSelect(select),
    };
  });

  // .sort((a, b) => {
  //   const aLevel = a.select ? getEdgeLevel(a.select) : 0;
  //   const bLevel = b.select ? getEdgeLevel(b.select) : 0;
  //   return aLevel - bLevel;
  // })
}

export const getRenderData = (
  mapping: NodeMapping,
  edges: ProFlowEdge[],
): {
  nodes: Node[];
  edges: Edge[];
} => {
  const renderNodes: Node[] = [];
  const renderEdges: Edge[] = getRenderEdges(edges);
  // const { styles, cx } = useStyles();

  Object.keys(mapping).forEach((id) => {
    const node = mapping[id];
    const { select = NodeSelect.DEFAULT } = node;

    renderNodes.push({
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      id: node.id!,
      position: { x: 0, y: 0 },
      type: getTypeFromEdge(node),
      width: 320,
      height: 83,
      className: cx(INIT_NODE),
      data: {
        label: node.group ? (
          <BloodNodeGroup
            id={node.id!}
            group={node.group}
            data={node.data! as ProFlowNode[]}
            select={select}
            zoom={node.zoom}
            label={node.label}
          />
        ) : (
          <BloodNode
            title={(node.data! as ProFlowNodeData).title!}
            description={(node.data! as ProFlowNodeData).describe!}
            logo={(node.data! as ProFlowNodeData).logo!}
            selectType={select}
            zoom={node.zoom}
            label={node.label}
            titleSlot={(node.data! as ProFlowNodeData).titleSlot}
          />
        ),
      },
    });
  });

  const { _nodes, _edges } = setNodePosition(renderNodes, renderEdges);

  return {
    nodes: _nodes,
    edges: sortEdges(_edges),
  };
};
