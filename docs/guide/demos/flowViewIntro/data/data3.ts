export const nodes = [
  {
    id: 'a1',
    position: {
      x: 0,
      y: 0,
    },
    data: {
      title: 'XXX_API_a1',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a2',
    position: {
      x: 500,
      y: -200,
    },
    data: {
      title: 'XXX_API_a2',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a3',
    position: {
      x: 500,
      y: 200,
    },
    data: {
      title: 'XXX_API_a3',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
];
export const edges = [
  {
    id: 'a1-a2',
    source: 'a1',
    type: 'radius',
    target: 'a2',
  },
  {
    id: 'a1-a3',
    source: 'a1',
    target: 'a3',
    type: 'radius',
  },
];
