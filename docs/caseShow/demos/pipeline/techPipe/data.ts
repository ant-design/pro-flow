const nodeWidth = 250;
const nodeHeight = 150;
const edgeType = 'bezier';

export const nodes = [
  {
    id: 'a1',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      title: '数据信息',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*wq7DR7D72DwAAAAAAAAAAAAADvl6AQ/original',
      children: [
        {
          id: 'a1-1',
          title: 'xxxx 数据源',
        },
      ],
    },
  },
  {
    id: 'a2',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      title: '项目名称1',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*DR-gSJlc3J4AAAAAAAAAAAAADvl6AQ/original',
      des: '累计 10 个任务',
      children: [
        {
          id: 'a2-1',
          title: '实验-xxxx',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*AuYvRabu9iAAAAAAAAAAAAAADvl6AQ/original',
        },
        {
          id: 'a2-2',
          title: '实验-xxxx',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*AuYvRabu9iAAAAAAAAAAAAAADvl6AQ/original',
        },
        {
          id: 'a2-3',
          title: '服务-xxxx',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*AuYvRabu9iAAAAAAAAAAAAAADvl6AQ/original',
        },
      ],
    },
  },
  {
    id: 'a3',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      title: '项目名称2',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*DR-gSJlc3J4AAAAAAAAAAAAADvl6AQ/original',
      des: '累计 3 个任务',
      children: [
        {
          id: 'a3-1',
          title: '实验-xxxx',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*AuYvRabu9iAAAAAAAAAAAAAADvl6AQ/original',
        },
        {
          id: 'a3-2',
          title: '实验-xxxx',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*AuYvRabu9iAAAAAAAAAAAAAADvl6AQ/original',
        },
        {
          id: 'a3-3',
          title: '服务-xxxx',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*AuYvRabu9iAAAAAAAAAAAAAADvl6AQ/original',
        },
      ],
    },
  },
  {
    id: 'a4',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      title: '项目参与机构',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*80wQTLLZQUIAAAAAAAAAAAAADvl6AQ/original',
      des: '累计 3 个机构',
      children: [
        {
          id: 'a4-1',
          title: '项目申请机构1',
        },
        {
          id: 'a4-2',
          title: '项目申请机构2',
        },
        {
          id: 'a4-3',
          title: '项目申请机构3',
        },
      ],
    },
  },
];

export const edges = [
  {
    id: 'edge-1',
    source: 'a1',
    target: 'a2',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a2-1-target',
  },
  {
    id: 'edge-2',
    source: 'a1',
    target: 'a2',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a2-2-target',
  },
  {
    id: 'edge-3',
    source: 'a1',
    target: 'a2',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a2-3-target',
  },
  {
    id: 'edge-4',
    source: 'a1',
    target: 'a3',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a3-1-target',
  },
  {
    id: 'edge-5',
    source: 'a1',
    target: 'a3',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a3-2-target',
  },
  {
    id: 'edge-6',
    source: 'a1',
    target: 'a3',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a3-3-target',
  },
  {
    id: 'edge-7',
    source: 'a2',
    target: 'a4',
    type: edgeType,
    sourceHandle: 'a2-1-source',
    targetHandle: 'a4-1-target',
  },
  {
    id: 'edge-8',
    source: 'a2',
    target: 'a4',
    type: edgeType,
    sourceHandle: 'a2-1-source',
    targetHandle: 'a4-2-target',
  },
  {
    id: 'edge-9',
    source: 'a2',
    target: 'a4',
    type: edgeType,
    sourceHandle: 'a2-1-source',
    targetHandle: 'a4-3-target',
  },
  {
    id: 'edge-10',
    source: 'a2',
    target: 'a4',
    type: edgeType,
    sourceHandle: 'a2-2-source',
    targetHandle: 'a4-2-target',
  },
  {
    id: 'edge-11',
    source: 'a3',
    target: 'a4',
    type: edgeType,
    sourceHandle: 'a3-2-source',
    targetHandle: 'a4-1-target',
  },
  {
    id: 'edge-12',
    source: 'a3',
    target: 'a4',
    type: edgeType,
    sourceHandle: 'a3-3-source',
    targetHandle: 'a4-2-target',
  },
];
