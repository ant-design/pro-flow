import { SelectType } from '@ant-design/pro-flow';

export const formatNodeMapping = (nodes, edges) => {
  const obj = {};
  nodes.forEach((node) => {
    obj[node.id] = { ...node };
    obj[node.id].left = getLeftNode(nodes, edges, node.id);
    obj[node.id].right = getRightNode(nodes, edges, node.id);
  });
  return obj;
};

export const formatEdgeMapping = (nodes, edges) => {
  const obj = {};
  edges.forEach((edge) => {
    obj[edge.id] = { ...edge };
    obj[edge.id].targetNode = nodes.find((node) => node.id === edge.target);
    obj[edge.id].sourceNode = nodes.find((node) => node.id === edge.source);
  });
  return obj;
};

export const setNodeDanger = (nodeMapping) => {
  Object.keys(nodeMapping).forEach((key) => {
    const node = nodeMapping[key];
    if (node.data.isDanger) {
      const highNodes = getAllHighLightNode(nodeMapping, node.id);

      highNodes.forEach((item) => {
        if ([SelectType.SELECT, SelectType.SUB_SELECT].includes(nodeMapping[item.id].select))
          return;
        nodeMapping[item.id].select = SelectType.SUB_DANGER;
      });
    }
  });

  return nodeMapping;
};

export const setEdgeDanger = (edgeMapping) => {
  Object.keys(edgeMapping).forEach((key) => {
    const edge = edgeMapping[key];

    if (edge.targetNode.data.isDanger || edge.sourceNode.data.isDanger) {
      if ([SelectType.SELECT, SelectType.SUB_SELECT].includes(edge.select)) return;
      edge.select = SelectType.SUB_DANGER;
    }
  });

  return edgeMapping;
};

export const getLeftNode = (nodes, edges, currentId) => {
  return edges
    .filter((edge) => {
      return edge.target === currentId;
    })
    .map((edge) => {
      const node = nodes.find((node) => node.id === edge.source);
      return node.id;
    });
};

export const getRightNode = (nodes, edges, currentId) => {
  return edges
    .filter((edge) => {
      return edge.source === currentId;
    })
    .map((edge) => {
      const node = nodes.find((node) => node.id === edge.target);
      return node.id;
    });
};

export const getAllHighLightNode = (nodeMapping, currentId) => {
  const leftNodes = [];
  const rightNodes = [];

  function getLeft(nodeId) {
    if (nodeMapping[nodeId] === undefined) return;

    const lefts = nodeMapping[nodeId].left;
    if (lefts.length === 0) return;

    leftNodes.push(...lefts.map((item: string) => nodeMapping[item]));
    lefts.forEach((node) => {
      getLeft(node);
    });
  }

  function getRight(nodeId) {
    if (nodeMapping[nodeId] === undefined) return;

    const rights = nodeMapping[nodeId].right;
    if (rights.length === 0) return;

    rightNodes.push(...rights.map((item) => nodeMapping[item]));
    rights.forEach((node) => {
      getRight(node);
    });
  }
  getLeft(currentId);
  getRight(currentId);

  return [...leftNodes, ...rightNodes, nodeMapping[currentId]];
};
