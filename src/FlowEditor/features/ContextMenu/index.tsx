import { ContextMenu } from '@ant-design/pro-editor';
import { memo } from 'react';

import { useMenuActions } from './useMenuAction';

const RightClickContextMenu = memo(() => {
  const actions = useMenuActions();

  const defaultMode = [
    // 默认模式
    actions.paste,
    actions.DIVIDER,
    actions.selectAll,
    actions.zoomIn,
    actions.zoomOut,
  ];

  // TODO：选中一个节点

  // TODO：选中一条边

  // TODO：选中一组节点

  return <ContextMenu items={defaultMode} />;
});

export default RightClickContextMenu;
