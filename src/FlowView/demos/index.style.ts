import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    dangerLogo: {
      width: '28px',
      height: '16px',
      background: '#ffeef1',
      borderRadius: '7px',
      marginTop: '3px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      img: { width: '8px', height: '9px' },
    },
    container: {
      width: '100%',
      height: '600px',
      '.ant-progress-text': { textAlign: 'center' },
    },
    CustomWrap: {
      width: '300px',
      height: '100px',
      backgroundColor: 'red',
    },
  };
});
export default useStyles;
