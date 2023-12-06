import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    container: {
      width: '100%',
      height: '800px',
      display: 'flex',
      flexDirection: 'column',
    },
    aside: {
      marginBottom: '10px',
    },
    description: {
      marginBottom: '10px',
    },
    dndnode: {
      height: '20px',
      padding: '4px',
      border: '1px solid #1a192b',
      borderRadius: '2px',
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'grab',
    },
    'dndnode.input': {
      borderColor: '#0041d0',
    },
    'dndnode.output': {
      borderColor: '#ff0072',
    },
    'reactflow-wrapper': {
      flexGrow: '1',
      height: '100%',
    },
    selectall: {
      marginTop: '10px',
    },
  };
});
export default useStyles;
