import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    container: {
      width: '100%',
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
    },
    aside: {
      width: '200px',
      height: '100%',
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 10000000,
      borderRight: '1px solid #eee',
      padding: '15px 10px',
      fontSize: '12px',
      background: '#fcfcfc',
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
    textNode: {
      width: '300px',
      height: '300px',
      background: '#fff',
      borderRadius: '10px',
      border: '1px solid #ddd',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      h1: {
        margin: 0,
        padding: '10px',
        borderBottom: '1px solid #ddd',
        fontSize: '',
      },
      textarea: {
        width: '280px',
        height: '200px',
      },
    },
  };
});
export default useStyles;
