export const nodes = [
  {
    id: 'a1',
    label: 'a1',
    data: {
      title: 'XXX_API_ddddddddddddddddddddddddddddddddddddddddddddddddddddddb1',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a2',
    label: 'a2',
    data: {
      title: 'XXX_API_ddddddddddddddddddddddddddddddddddddddddddddddddddddddb1',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
    },
  },
];

export const getEdges = (className) => [
  {
    id: 'e1',
    source: 'a1',
    target: 'a2',
    type: 'buttonEdge',
    className,
  },
];
