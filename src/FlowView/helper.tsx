import { EdgeType, FlowViewEdge, FlowViewNode } from '@/constants';
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
  SelectType,
} from './constants';

export function convertMappingFrom(nodes: FlowViewNode[], edges: FlowViewEdge[], zoom: number) {
  const mapping: NodeMapping = {};

  console.log(zoom);

  nodes.forEach((node) => {
    const {
      width,
      height,
      select = SelectType.DEFAULT,
      type = 'lineage',
      position = { x: NaN, y: NaN },
    } = node;

    mapping[node.id] = {
      id: node.id,
      data: node.data,
      select,
      flowNodeType: type,
      right: [],
      left: [],
      position,
      width,
      height,
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
      const { x: _x, y: _y } = node.position;
      return {
        ...node,
        position: {
          x: (isNaN(_x) ? x : _x) * 1.3,
          y: (isNaN(_y) ? y : _y) * 1,
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

function getEdgeClsFromSelectType(select: SelectType) {
  switch (select) {
    case SelectType.SELECT:
      return EDGE_SELECT;
    case SelectType.SUB_SELECT:
      return EDGE_SUB_SELECT;
    case SelectType.DANGER:
      return EDGE_DANGER;
    case SelectType.SUB_DANGER:
      return EDGE_SUB_DANGER;
    case SelectType.WARNING:
      return EDGE_WARNING;
    case SelectType.SUB_WARNING:
      return EDGE_SUB_WARNING;
    default:
      return 'edgeDefault';
  }
}

// function getEdgeLevel(select: SelectType) {
//   switch (select) {
//     case SelectType.SELECT:
//       return 6;
//     case SelectType.SUB_SELECT:
//       return 5;
//     case SelectType.DANGER:
//       return 4;
//     case SelectType.SUB_DANGER:
//       return 3;
//     case SelectType.WARNING:
//       return 2;
//     case SelectType.SUB_WARNING:
//       return 1;
//     default:
//       return 0;
//   }
// }

export function getRenderEdges(edges: FlowViewEdge[]) {
  return edges.map((edge) => {
    const { source, target, select = SelectType.DEFAULT, type } = edge;

    return {
      id: `${source}-${target}`,
      source,
      target,
      type: type === EdgeType.default ? 'smoothstep' : 'radiusEdge',
      className: getEdgeClsFromSelectType(select),
    };
  });

  // .sort((a, b) => {
  //   const aLevel = a.select ? getEdgeLevel(a.select) : 0;
  //   const bLevel = b.select ? getEdgeLevel(b.select) : 0;
  //   return aLevel - bLevel;
  // })
}

// const NodeComponentHandler: NodeHandler = {
//   default: (node: NodeMapItem) => <DefaultNode {...(node.data as DefaultNodeData)} />,
//   lineage: (node: NodeMapItem) => {
//     const { select = SelectType.DEFAULT } = node;

//     return (
//       <LineageNode
//         title={(node.data! as LineageNodeData).title!}
//         description={(node.data! as LineageNodeData).describe!}
//         logo={(node.data! as LineageNodeData).logo!}
//         selectType={select}
//         zoom={node.zoom}
//         label={node.label}
//         titleSlot={(node.data! as LineageNodeData).titleSlot}
//       />
//     );
//   },
//   lineageGroup: (node: NodeMapItem) => {
//     const { select = SelectType.DEFAULT } = node;

//     return (
//       <LineageNodeGroup
//         id={node.id!}
//         data={node.data! as unknown as LineageGroupNodeData[]}
//         select={select}
//         zoom={node.zoom}
//         label={node.label}
//       />
//     );
//   },
// };

const getWidthAndHeight = (node: NodeMapItem) => {
  if (['lineage', 'default'].includes(node.flowNodeType!)) {
    return {
      width: 320,
      height: 83,
    };
  } else if (node.flowNodeType === 'lineageGroup') {
    return {
      width: 355,
      height: 1100,
    };
  } else {
    return {
      width: node.width,
      height: node.height,
    };
  }
};

export const getRenderData = (
  mapping: NodeMapping,
  edges: FlowViewEdge[],
): {
  nodes: Node[];
  edges: Edge[];
} => {
  const renderNodes: Node[] = [];
  const renderEdges: Edge[] = getRenderEdges(edges);

  Object.keys(mapping).forEach((id) => {
    const node = mapping[id];
    const { flowNodeType, data } = node;
    const { width, height } = getWidthAndHeight(node);
    console.log(node.zoom);
    renderNodes.push({
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      id: node.id!,
      position: node.position!,
      type: flowNodeType,
      width: width,
      height: height,
      className: cx(INIT_NODE),
      data: {
        ...data,
        selectType: node.select,
        label: node.label,
        zoom: node.zoom,
      },
    });
  });
  console.log(renderNodes);

  const { _nodes, _edges } = setNodePosition(renderNodes, renderEdges);

  return {
    nodes: _nodes,
    edges: sortEdges(_edges),
  };
};
