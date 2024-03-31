import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    techUIpipeNodeWrap: {
      width: '260px',
      minHeight: '100px',
      backgroundColor: '#f6f8fa',
      padding: '12px 6px',
      boxSizing: 'border-box',
      borderRadius: '8px',
    },

    pipeNode: {
      width: '100%',
      borderRadius: '4px',
      backgroundColor: '#fff',
      paddingBottom: '12px',
    },
    mainBox: {
      width: '100%',
      padding: '12px',
      height: '45px',
      backgroundColor: 'white',
      display: 'flex',
      borderBottom: 'none',
      borderRadius: '8px',
      boxSizing: 'border-box',
      position: 'relative',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      img: { width: '16px', height: '16px' },
    },
    title: {
      marginLeft: '8px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#000',
      lineHeight: '22px',
      whiteSpace: 'nowrap',
    },
    lineTitle: {
      marginLeft: '8px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#000',
      lineHeight: '22px',
      whiteSpace: 'nowrap',
    },
    subLogo: {
      position: 'absolute',
      right: '6px',
      top: '8px',
      img: { width: '80px', height: '25px' },
    },
    des: {
      marginTop: '16px',
      color: '#00000073',
      fontSize: '10px',
    },
    children: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '8px',
    },
    childrenBox: {
      width: '220px',
      height: '30px',
      paddingLeft: '5px',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #f1f1f1',
      borderRadius: '3px',
      boxSizing: 'border-box',
      marginTop: '3px',
      position: 'relative',
    },
    wrap: {
      marginLeft: '8px',
      display: 'flex',
      flexDirection: 'column',
    },
    container: {
      width: '100%',
      height: '600px',
    },
  };
});
export default useStyles;
