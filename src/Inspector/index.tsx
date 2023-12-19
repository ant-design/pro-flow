// import { DraggablePanel } from '@ant-design/pro-editor';
import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';
import React from 'react';
import useStyles from './index.style';

interface DataFlowDrawProps extends DrawerProps {
  resize?: boolean;
  open: boolean;
  width: string | number;
  onClose: () => void;
}

// const VisibleMinWidth = 300; // 画布最小可视宽度
const Inspector: React.FC<DataFlowDrawProps> = ({
  // resize = false,
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
  const { styles, cx } = useStyles();

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
      className={
        className ? cx({ [styles.dataFlowDrawer]: true, className: true }) : styles.dataFlowDrawer
      }
      getContainer={false}
      style={{ ...style, padding: '0 0' }}
      rootStyle={{ ...rootStyle, position: 'absolute' }}
      {...props}
    >
      {children}
      {/* <DraggablePanel
        isExpand={open}
        placement={'right'}
        resize={resize}
        // size={{ width: dragedWith, height: '100%' }} // panel 尺寸受控模式
        // onSizeDragging={onSizeDragging}
        style={{ padding: '16px 12px' }}
        className={styles.dataFlowDrawerDraggablePanel}
      >
        {children}
      </DraggablePanel> */}
    </Drawer>
  );
};

export default Inspector;
