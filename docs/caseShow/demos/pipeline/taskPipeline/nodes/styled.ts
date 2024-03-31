import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    wrap: {
      width: '240px',
      backgroundColor: '#FAFAFA',
      marginBottom: '10px',
      borderRadius: '8px',
      position: 'relative',
    },
    taskNode: {
      width: '240px',
      minHeight: '42px',
      backgroundColor: 'white',
      padding: '8px 12px',
      borderRadius: '8px',
      boxSizing: 'border-box',
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

        '.extra': {
          width: '60px',
        },

        '.span': {
          width: '20px',
          display: 'block',
          textAlign: 'center',
        },
      },
    },

    stageNode: {
      width: '256px',
      height: ' 100%',
      backgroundColor: '#FAFAFA',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '8px',

      '.wrap': {
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        padding: '10px',
      },

      '.title': {
        width: '100px',
        marginLeft: '10px',
      },
    },

    taskContent: {
      margin: '0',
      padding: '8px 12px',
      listStyle: 'none',
      border: '1px solid #f0f0f0',
      borderTop: 'none',
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
