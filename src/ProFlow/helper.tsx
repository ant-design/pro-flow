import BloodNodeGroup from '@/BloodGroupNode';
import BloodNode from '@/BloodNode';
import Dagre from '@dagrejs/dagre';
import { cx } from 'antd-style';
import { Edge, Node, Position } from 'reactflow';
import {
  EDGE_DANGER,
  EDGE_SELECT,
  EDGE_WARNING,
  INIT_NODE,
  InitialNode,
  NodeMapItem,
  NodeMapping,
  NodeSelect,
  ProFLowEdge,
  ProFlowNode,
  ProFlowNodeData,
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

export function convertMappingFrom(nodes: ProFlowNode[], edges: ProFLowEdge[]) {
  const mapping: NodeMapping = {};
  nodes.forEach((node) => {
    mapping[node.id] = {
      id: node.id,
      group: node.group,
      data: node.data,
      select: node.select,
      right: [],
      left: [],
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
  const highEdges: Edge[] = edges.filter((item) =>
    item.className?.includes('initialNode-selected'),
  );
  const midEdges: Edge[] = edges.filter((item) => item.className?.includes('edgeDanger'));
  const lowEdges: Edge[] = edges.filter(
    (item) =>
      !item.className?.includes('initialNode-selected') && !item.className?.includes('edgeDanger'),
  );

  return [...lowEdges, ...midEdges, ...highEdges];
}

function getEdgeClsFromNodeSelect(select: NodeSelect) {
  switch (select) {
    case NodeSelect.SELECT:
      return EDGE_SELECT;
    case NodeSelect.DANGER:
      return EDGE_DANGER;
    case NodeSelect.WARNING:
      return EDGE_WARNING;
    default:
      return 'edgeDefault';
  }
}

function getRenderEdge(node: NodeMapItem, targetNode: NodeMapItem) {
  const { id } = node;
  const { id: targetId, select = NodeSelect.DEFAULT } = targetNode;

  return {
    id: `${id}-${targetId}`,
    source: id!,
    target: targetId!,
    type: 'radiusEdge',
    className: getEdgeClsFromNodeSelect(select),
  };
}

export const getRenderData = (
  mapping: NodeMapping,
): {
  nodes: Node[];
  edges: Edge[];
} => {
  const renderNodes: Node[] = [];
  const renderEdges: Edge[] = [];
  // const { styles, cx } = useStyles();

  Object.keys(mapping).forEach((id) => {
    const node = mapping[id];
    const { select = NodeSelect.DEFAULT } = node;
    console.log(node);
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
          />
        ) : (
          <BloodNode
            title={(node.data! as ProFlowNodeData).title!}
            description={(node.data! as ProFlowNodeData).describe!}
            logo={(node.data! as ProFlowNodeData).logo!}
            selectType={select}
          />
        ),
      },
    });

    if (node.right!.length) {
      node.right!.forEach((targetId: string) => {
        renderEdges.push(getRenderEdge(node, mapping[targetId]));
      });
    }
  });

  const { _nodes, _edges } = setNodePosition(renderNodes, renderEdges);

  return {
    nodes: _nodes,
    edges: sortEdges(_edges),
  };
};
