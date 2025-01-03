const Dagre = require('@dagrejs/dagre');

const setPosition = (nodes, edges) => {
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

  g.setGraph({
    rankdir: 'LR',
    align: 'UL',
    nodesep: 100,
    ranksep: 200,
  });

  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node) => g.setNode(node.id, node));

  Dagre.layout(g);

  g.nodes().forEach(function (v) {
    console.log(v + ': ' + g.node(v).x + ', ' + g.node(v).y);
  });
};

const nodes1 = [
  {
    id: 'b1',
    width: 200,
    height: 100,
    data: {
      title: 'SaveMoneyContainer',
      description: '直塞发奖弹窗',
      logo: 'https://mdn.alipayobjects.com/huamei_fcqe9k/afts/img/A*j8ICSbNgZ3wAAAAAAAAAAAAADtOFAQ/original',
      titleSlot: {
        type: 'right',
      },
    },
  },
  {
    id: 'b11',
    type: 'Group',
    width: 200,
    height: 300,
    data: {
      count: 10,
    },
  },
  {
    id: 'b2',
    type: 'Group',
    width: 234,
    height: 100,
    data: {
      count: 2,
    },
  },
];

const nodes2 = [
  {
    id: 'b1',
    width: 200,
    height: 100,
    data: {
      title: 'SaveMoneyContainer',
      description: '直塞发奖弹窗',
      logo: 'https://mdn.alipayobjects.com/huamei_fcqe9k/afts/img/A*j8ICSbNgZ3wAAAAAAAAAAAAADtOFAQ/original',
      titleSlot: {
        type: 'right',
      },
    },
  },
  {
    id: 'b11',
    type: 'Group',
    width: 200,
    height: 400,
    data: {
      count: 10,
    },
  },
  {
    id: 'b2',
    type: 'Group',
    width: 234,
    height: 100,
    data: {
      count: 2,
    },
  },
];

const nodes3 = [
  {
    id: 'b1',
    width: 200,
    height: 100,
    data: {
      title: 'SaveMoneyContainer',
      description: '直塞发奖弹窗',
      logo: 'https://mdn.alipayobjects.com/huamei_fcqe9k/afts/img/A*j8ICSbNgZ3wAAAAAAAAAAAAADtOFAQ/original',
      titleSlot: {
        type: 'right',
      },
    },
  },
  {
    id: 'b11',
    type: 'Group',
    width: 200,
    height: 500,
    data: {
      count: 10,
    },
  },
  {
    id: 'b2',
    type: 'Group',
    width: 234,
    height: 100,
    data: {
      count: 2,
    },
  },
];

const edges = [
  {
    id: 'b111',
    source: 'b1',
    target: 'b11',
  },
  {
    id: 'b12',
    source: 'b1',
    target: 'b2',
  },
];

setPosition(nodes1, edges);

setPosition(nodes2, edges);

setPosition(nodes3, edges);
