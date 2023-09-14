import BloodNode from '@/BloodNode';
import Dagre from '@dagrejs/dagre';
import { Edge, Node, Position } from 'reactflow';
import { InitialNode, NodeMapItem, NodeMapping, ProFLowEdge, ProFlowNode } from './constants';

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
      nodeType: node.type, // BloodNode | BloodGroup
      data: node.data,
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

export const getRenderData = (
  mapping: NodeMapping,
): {
  nodes: Node[];
  edges: Edge[];
} => {
  const renderNodes: Node[] = [];
  const renderEdges: Edge[] = [];

  Object.keys(mapping).forEach((id) => {
    const node = mapping[id];

    renderNodes.push({
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      id: node.id!,
      position: { x: 0, y: 0 },
      type: getTypeFromEdge(node),
      width: 320,
      height: 83,
      className: `initialNode`,
      data: {
        label: (
          <BloodNode
            title={node.data!.title!}
            description={node.data!.describe!}
            logo={node.data!.logo!}
          />
        ),
      },
    });

    if (node.right!.length) {
      node.right!.forEach((id: string) => {
        renderEdges.push({
          id: `${node.id}-${id}`,
          source: node.id!,
          target: id,
          type: 'smoothstep',
          className: `${node.selected && mapping[id].selected ? 'initialNode-selected' : ''} ${
            node.mainDanger || node.subDanger ? 'edgeDanger' : ''
          }`,
        });
      });
    }
  });

  const { _nodes, _edges } = setNodePosition(renderNodes, renderEdges);

  return {
    nodes: _nodes,
    edges: sortEdges(_edges),
  };
};
