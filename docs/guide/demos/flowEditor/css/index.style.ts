import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    stringNode: {
      width: '150px',
      height: '30px',
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid aqua',
      borderRadius: '4px',
      lineHeight: '30px',
    },
    selected: {
      border: '1px solid #007bff',
    },
  };
});
export default useStyles;
