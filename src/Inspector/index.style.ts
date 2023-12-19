import { createStyles } from 'antd-style';

const useStyles = createStyles(() => {
  return {
    container: {
      width: '100%',
      height: '600px',
    },
    dataFlowDrawer: {
      textAlign: 'left',
      color: '#000',
      '.ant-drawer-title': { textAlign: 'left' },
    },
    'dataFlowDrawerDraggablePanel.studio-draggable-panel': {
      height: '100%',
      overflow: 'visible',
      zIndex: '19',
      borderColor: 'transparent',
      borderLeftWidth: '0',
    },
    'studio-draggable-panel-left-handle:active::before': {
      backgroundColor: 'rgb(195, 195, 195)',
      background: 'rgb(195, 195, 195)',
    },
    dataFlowDrawerDraggablePanel: {
      display: 'none',
    },
    'studio-draggable-panel-toggle': {
      display: 'none',
    },
  };
});
export default useStyles;
