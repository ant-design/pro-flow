import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    edgebutton: {
      width: '0px',
      background: '#eee',
      border: '1px solid #fff',
      cursor: 'pointer',
      borderRadius: '30px',
      fontSize: '12px',
      lineHeight: '1',
    },
    'edgebutton:hover': {
      boxShadow: '0 0 6px 2px rgba(0, 0, 0, 0.08)',
    },
    'customEdge:hover': {
      stroke: 'red',
    },
    path: {
      stroke: 'red',
    },
  };
});
export default useStyles;
