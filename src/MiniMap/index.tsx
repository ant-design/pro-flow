import { ExpandOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Space, Tooltip, theme as antdTheme } from 'antd';
import { createStyles } from 'antd-style';
import React from 'react';
import { Flexbox } from 'react-layout-kit';
import { MiniMap as FlowMiniMap, useReactFlow, useViewport } from 'reactflow';
import { Language, MiniMapPosition } from '../constants';

const useStyles = createStyles(({ css, token }, props: { x: number; y: number }) => {
  const { x, y } = props;

  return {
    container: css`
      position: absolute;
      bottom: ${y}px;
      right: ${x}px;
      z-index: 100;
      transition: right 0.2s ease;

      .actionBox {
        width: 192px;
        height: 38px;
        display: flex;
        justify-content: space-evenly;
      }

      .ant-btn-default:not(:disabled):not(.ant-btn-dangerous) {
        border-color: ${token.colorBorder};
      }
    `,

    visible: css`
      display: none;
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
  };
});

const actionTitle = {
  [Language.zh_CN]: {
    zoomIn: '放大',
    zoomOut: '缩小',
    zoomFit: '自适应画布',
    zoomTo1: '缩放为 1:1',
    zoomTo2: '缩放为 2:1',
  },
  [Language.en_US]: {
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    zoomFit: 'Zoom Fit',
    zoomTo1: 'Zoom To 1:1',
    zoomTo2: 'Zoom To 2:1',
  },
};

interface MiniMapProps {
  visible?: boolean;
  className?: string;
  position?: MiniMapPosition;
  language?: Language;
}

const MiniMap: React.FC<Partial<MiniMapProps>> = (props) => {
  const {
    visible = true,
    className = '',
    position = { x: 10, y: 10 },
    language = Language.zh_CN,
  } = props;
  const reactFlow = useReactFlow();
  const { zoom } = useViewport();
  const { styles, cx, theme } = useStyles(position);

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
      title: actionTitle[language].zoomOut,
      onClick: handleZoomOut,
    },
    {
      title: zoom === 1 ? actionTitle[language].zoomTo2 : actionTitle[language].zoomTo1,
      onClick: handleZoomTo,
      children: Math.round(zoom * 100) + '%',
      style: { width: 56 },
    },
    {
      icon: <PlusOutlined />,
      title: actionTitle[language].zoomIn,
      onClick: handleZoomIn,
    },
    {
      icon: <ExpandOutlined />,
      title: actionTitle[language].zoomFit,
      onClick: handleZoomFit,
    },
  ];

  return (
    <Flexbox
      gap={12}
      align={'center'}
      className={cx(styles.container, className, !visible && styles.visible)}
    >
      <ConfigProvider
        theme={{
          algorithm: [
            theme.isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
            antdTheme.compactAlgorithm,
          ],
        }}
      >
        <Flexbox horizontal align={'center'}>
          <Space className="actionBox">
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
      <FlowMiniMap
        className={styles.minimap}
        maskColor={theme.colorBgMask}
        nodeColor={(n) => {
          if (n.data.color) return n.data.color;
          return theme.colorFill;
        }}
      />
    </Flexbox>
  );
};

export default MiniMap;
