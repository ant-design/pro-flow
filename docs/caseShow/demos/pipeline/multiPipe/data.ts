const nodeWidth = 170;
const nodeHeight = 500;

export const nodes = [
  {
    id: 'a1',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      stepTitle: '阶段 1: 部署平台 npmregistry@...',
      title: 'npmregistry@DEFAULT ...',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
      des: '34秒',
      needSwitch: true,
      open: true,
      children: [
        {
          title: '参数初始化',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '1秒',
        },
        {
          title: 'NPM 组件初始化',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '30秒',
          leftHandle: false,
          rightHandle: true,
        },
        {
          title: '同步成员（仅子组件生...',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '0秒',
        },
        {
          title: '注册部署平台',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '0秒',
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
      stepTitle: '阶段 2: 部署平台 xxx@DEFAULT ...',
      title: 'xxx@DEFAULT 初始化',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
      des: '2秒',
      needSwitch: true,
      open: true,
      children: [
        {
          title: '初始化海图组件',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '1秒',
        },
        {
          title: '注册部署平台',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '0秒',
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
      stepTitle: '阶段 3: 三方关联初始化',
      title: '监控初始化',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
      des: '1秒',
    },
  },
  {
    id: 'a4',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      stepTitle: '阶段 4: 准备组件仓库初始化',
      title: '重命名 name',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
      des: '1秒',
    },
  },
  {
    id: 'a5',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      stepTitle: '阶段 5: 代码初始化',
      title: '仓库初始化',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*7gzVQJ63mfEAAAAAAAAAAAAADvl6AQ/original',
      des: '6秒',
      needSwitch: true,
      open: true,
      children: [
        {
          title: '创建仓库',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '3秒',
        },
        {
          title: '接触分支保护',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*sko9RoPu-HgAAAAAAAAAAAAADvl6AQ/original',
          des: '1秒',
        },
        {
          title: '初始化代码模板',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*7gzVQJ63mfEAAAAAAAAAAAAADvl6AQ/original',
          des: '1秒',
        },
        {
          title: '创建代码基线',
          logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*Em_PQoTrMDgAAAAAAAAAAAAADvl6AQ/original',
          des: '未开始',
        },
      ],
    },
  },
  {
    id: 'a6',
    type: 'pipeNode',
    width: nodeWidth,
    height: nodeHeight,
    data: {
      stepTitle: '阶段 6: 仓库权限同步',
      title: '同步至埋点平台',
      logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*Em_PQoTrMDgAAAAAAAAAAAAADvl6AQ/original',
      des: '未开始',
    },
  },
  // {
  //   id: 'a7',
  //   type: 'pipeNode',
  //   width: nodeWidth,
  //   height: nodeHeight,
  //   data: {
  //     title: '同步至埋点平台',
  //     logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*Em_PQoTrMDgAAAAAAAAAAAAADvl6AQ/original',
  //     des: '未开始',
  //   },
  // },
  // {
  //   id: 'a8',
  //   type: 'pipeNode',
  //   width: nodeWidth,
  //   height: nodeHeight,
  //   data: {
  //     title: '同步至埋点平台',
  //     logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*Em_PQoTrMDgAAAAAAAAAAAAADvl6AQ/original',
  //     des: '未开始',
  //   },
  // },
  // {
  //   id: 'a9',
  //   type: 'pipeNode',
  //   width: nodeWidth,
  //   height: nodeHeight,
  //   data: {
  //     title: '同步至埋点平台',
  //     logo: 'https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*Em_PQoTrMDgAAAAAAAAAAAAADvl6AQ/original',
  //     des: '未开始',
  //   },
  // },
];

export const edges = [
  {
    id: 'e1',
    source: 'a1',
    target: 'a2',
    animated: true,
    sourceHandle: 'a1',
    targetHandle: 'a2',
  },
  // {
  //   id: 'e1-a7',
  //   source: 'a1',
  //   target: 'a7',
  //   sourceHandle: 'a1-NPM 组件初始化-source',
  //   targetHandle: 'a7',
  // },
  // {
  //   id: 'e1-a8',
  //   source: 'a1',
  //   target: 'a8',
  //   sourceHandle: 'a1-NPM 组件初始化-source',
  //   targetHandle: 'a8',
  // },
  // {
  //   id: 'e1-a9',
  //   source: 'a1',
  //   target: 'a9',
  //   sourceHandle: 'a1-NPM 组件初始化-source',
  //   targetHandle: 'a9',
  // },
  {
    id: 'e2',
    source: 'a2',
    target: 'a3',
    animated: true,
  },
  {
    id: 'e3',
    source: 'a3',
    target: 'a4',
    animated: true,
  },
  {
    id: 'e4',
    source: 'a4',
    target: 'a5',
    animated: true,
  },
  {
    id: 'e5',
    source: 'a5',
    target: 'a6',
    animated: true,
  },
];
