const nodeWidth = 250;
const nodeHeight = 150;

export const nodes = [
  {
    id: 'a2',
    type: 'customNode',
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
];
