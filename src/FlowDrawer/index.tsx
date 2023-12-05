import { DraggablePanel } from '@ant-design/pro-editor';
import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';
import { createStyles } from 'antd-style';
import React from 'react';
import './index.less';

interface DataFlowDrawProps extends DrawerProps {
  resize?: boolean;
}
// interface Size {
//   width: string | number;
//   height: string | number;
// }
// interface NumberSize {
//   width: number;
//   height: number;
// }
const useStyles = createStyles(({ css }) => ({
  container: css`
    width: 100%;
    height: 600px;
  `,
}));
// const VisibleMinWidth = 300; // 画布最小可视宽度
const FlowDrawer: React.FC<DataFlowDrawProps> = ({
  resize = false,
  open,
  width,
  mask = false,
  style = {},
  rootStyle = {},
  className,
  onClose = () => {},
  children,
  ...props
}) => {
  const { cx } = useStyles();

  // const [dragedWith, setDragedWidth] = useState<string | number | undefined>(width);
  // const onSizeDragging = (delta: NumberSize, size?: Size) => {
  //   const reactFlowWidth = document.querySelector('.react-flow')?.offsetWidth; // 画布宽度
  //   const drawerWidthNum = size?.width?.split('px')?.[0]
  //     ? Number(size?.width?.split('px')?.[0])
  //     : 0; // 侧边抽屉动态宽度
  //   if (drawerWidthNum && drawerWidthNum <= reactFlowWidth - VisibleMinWidth) {
  //     setDragedWidth(size?.width);
  //   }
  // };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      width={width}
      mask={mask}
      className={className ? cx({ ['dataFlowDrawer']: true, className: true }) : 'dataFlowDrawer'}
      getContainer={false}
      style={{ ...style, padding: '0 0' }}
      rootStyle={{ ...rootStyle, position: 'absolute' }}
      {...props}
    >
      <DraggablePanel
        isExpand={open}
        placement={'right'}
        resize={resize}
        // size={{ width: dragedWith, height: '100%' }} // panel 尺寸受控模式
        // onSizeDragging={onSizeDragging}
        style={{ padding: '16px 12px' }}
        className="dataFlowDrawerDraggablePanel"
      >
        {children}
      </DraggablePanel>
    </Drawer>
  );
};

export default FlowDrawer;
