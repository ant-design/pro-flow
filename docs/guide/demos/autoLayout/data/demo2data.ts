export const nodes = [
  {
    id: 'a1',
    position: {
      x: 100,
      y: 300,
    },
    data: {
      title: '节点1',
    },
  },
  {
    id: 'a2',
    position: {
      x: 300,
      y: 600,
    },
    data: {
      title: '节点2',
    },
  },
  {
    id: 'a3',
    data: {
      title: '节点3',
    },
  },
  {
    id: 'a4',
    data: {
      title: '节点4',
    },
  },
  {
    id: 'a5',
    data: {
      title: '节点5',
    },
  },
  {
    id: 'a6',
    data: {
      title: '节点6',
    },
  },
];

export const edges = [
  {
    source: 'a1',
    target: 'a2',
  },
  {
    source: 'a1',
    target: 'a3',
  },
  {
    source: 'a2',
    target: 'a3',
  },
  {
    source: 'a3',
    target: 'a6',
  },
  {
    source: 'a2',
    target: 'a4',
  },
  {
    source: 'a3',
    target: 'a5',
  },
  {
    source: 'a2',
    target: 'a6',
  },
];
