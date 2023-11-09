import { ExpandOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Space, Tooltip, theme as antdTheme } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { MiniMap, useReactFlow, useViewport } from 'reactflow';

export const useStyles = createStyles(({ css, token }) => ({
  container: css`
    position: absolute;
    z-index: 5;
    right: 10px;
    bottom: 10px;

    .ant-btn-default:not(:disabled):not(.ant-btn-dangerous) {
      border-color: ${token.colorBorder};
    }
  `,
  minimap: css`
    position: relative !important;
    right: 0;
    bottom: 0;

    overflow: hidden;

    height: 150px;
    margin: 0;

    background: ${token.colorBgContainer};
    border-radius: 4px;
  `,
}));

interface ControlActionProps {
  zoom: number;
}

const ControlAction = memo(({ zoom }: ControlActionProps) => {
  const { styles, theme } = useStyles();
  const reactFlow = useReactFlow();

  const handleZoomIn = () => {
    reactFlow.zoomIn();
  };
  const handleZoomOut = () => {
    reactFlow.zoomOut();
  };
  const handleZoomFit = () => {
    reactFlow.fitView();
  };
  const handleZoomTo = () => {
    if (zoom === 1) {
      reactFlow.zoomTo(0.5);
    } else {
      reactFlow.zoomTo(1);
    }
  };

  const actions = [
    {
      icon: <MinusOutlined />,
      title: '缩小',
      onClick: handleZoomOut,
    },
    {
      title: zoom === 1 ? '缩放为 2:1' : '缩放为 1:1',
      onClick: handleZoomTo,
      children: Math.round(zoom * 100) + '%',
      style: { width: 56 },
    },
    {
      icon: <PlusOutlined />,
      title: '放大',
      onClick: handleZoomIn,
    },
    {
      icon: <ExpandOutlined />,
      title: '自适应画布',
      onClick: handleZoomFit,
    },
  ];

  return (
    <Flexbox gap={12} align={'center'} className={styles.container}>
      <ConfigProvider
        theme={{
          algorithm: [
            theme.isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
            antdTheme.compactAlgorithm,
          ],
        }}
      >
        <Flexbox horizontal align={'center'}>
          <Space>
            {actions.map((action, index) => {
              return (
                <Tooltip arrow={false} key={index} title={action.title}>
                  <Button onClick={action.onClick} icon={action.icon} style={action.style}>
                    {action.children}
                  </Button>
                </Tooltip>
              );
            })}
          </Space>
        </Flexbox>
      </ConfigProvider>
      <MiniMap
        className={styles.minimap}
        maskColor={theme.colorBgMask}
        nodeColor={(n) => {
          if (n.data.color) return n.data.color;
          return theme.colorFill;
        }}
      />
    </Flexbox>
  );
});

export default memo(() => {
  const { zoom } = useViewport();
  return <ControlAction zoom={zoom} />;
});
