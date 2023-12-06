import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    container: {
      width: '100%',
      height: '600px',
      '.ant-progress-text': { textAlign: 'center' },
    },
    stringNode: {
      width: '150px',
      height: '30px',
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid aqua',
      borderRadius: '4px',
      lineHeight: '30px',
    },
  };
});
export default useStyles;
