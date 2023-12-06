import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    wrap: {
      width: '200px',
      height: '83px',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    default: {
      border: 'none',
    },
    select: {
      border: '1px solid red',
    },
    container: {
      width: '100%',
      height: '300px',
    },
  };
});
export default useStyles;
