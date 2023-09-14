import { ExpandOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import { createStyles } from 'antd-style';
import { MiniMap, useReactFlow, useViewport } from 'reactflow';

const useStyles = createStyles(({ css }) => ({
  container: css`
    position: absolute;
    bottom: 0px;
    z-index: 100;
    right: 10px;
    transition: right 0.2s ease;
  `,

  visible: css`
    right: 387px;
  `,

  controlAction: css`
    height: 80px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  measureMap: css`
    border-radius: 4px;
    height: 180px;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    right: 0;
    bottom: 0;
    position: relative;
  `,
}));

interface ProFlowControllerProps {
  visible?: boolean;
}

const ProFlowController: React.FC<Partial<ProFlowControllerProps>> = (props) => {
  const { visible = false } = props;
  const reactFlow = useReactFlow();
  const { zoom } = useViewport();
  const { styles, cx } = useStyles();

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

  return (
    <div className={cx(styles.container, visible && styles.visible)}>
      <div className={styles.controlAction}>
        <Space>
          <Button icon={<MinusOutlined />} onClick={handleZoomOut} />
          <Tooltip title={zoom === 1 ? '缩放为 2:1' : '缩放为 1:1'}>
            <Button onClick={handleZoomTo}>{Math.round(zoom * 100)}%</Button>
          </Tooltip>
          <Button icon={<PlusOutlined />} onClick={handleZoomIn} />
          <Tooltip title={'自适应画布'}>
            <Button icon={<ExpandOutlined />} onClick={handleZoomFit} />
          </Tooltip>
        </Space>
      </div>
      <MiniMap
        className={styles.measureMap}
        pannable
        onNodeClick={(_, data) => {
          const bound = {
            ...data.position,
            height: data.height!,
            width: data.width!,
          };
          reactFlow.fitBounds(bound, { padding: 0.5 });
        }}
      />
    </div>
  );
};

export default ProFlowController;
