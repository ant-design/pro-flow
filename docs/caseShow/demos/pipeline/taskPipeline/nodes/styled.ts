import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    taskNode: {
      width: '240px',
      minHeight: '42px',
      backgroundColor: 'white',
      padding: '8px 12px',
      boxSizing: 'border-box',
      borderRadius: '8px',
      border: '1px solid #e8e8e8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '.title': {
        width: '100px',
        marginLeft: '10px',
      },
      '.group': {
        width: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '.span': {
          width: '20px',
          display: 'block',
          textAlign: 'center',
        },
      },
    },

    stageNode: {
      width: '300px',
      minHeight: '500px',
      backgroundColor: 'red',
    },
    wrap: {
      width: '240px',
      backgroundColor: '#FAFAFA',
    },
    taskContent: {
      margin: '0',
      padding: '8px 12px',
      listStyle: 'none',
      '> li': {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
        '> div': {
          marginLeft: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        },
      },
    },
  };
});
export default useStyles;
