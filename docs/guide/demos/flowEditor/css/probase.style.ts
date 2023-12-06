import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    container: {
      width: '100%',
      height: '600px',
      button: {
        width: '100px',
        height: '30px',
        lineHeight: '24px',
        boxSizing: 'border-box',
        textAlign: 'center',
        userSelect: 'none',
        marginRight: '10px',
        marginTop: '10px',
      },
    },
  };
});
export default useStyles;
