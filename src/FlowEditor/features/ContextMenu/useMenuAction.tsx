import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { BoxSelect, ClipboardList } from 'lucide-react';
import { useMemo } from 'react';
import { useReactFlow } from 'reactflow';

import { useStore } from '../../store';

const size = 16;

export const useMenuActions = () => {
  const instance = useReactFlow();
  const [selectAll] = useStore((s) => [s.selectAll]);

  return useMemo(
    () => ({
      DIVIDER: {
        type: 'divider',
      } as const,
      paste: {
        key: 'paste',
        label: '粘贴',
        onClick: selectAll,
        icon: <ClipboardList size={size} />,
        shortcut: ['meta', 'V'],
      },
      selectAll: {
        key: 'selectAll',
        label: '选择全部',
        icon: <BoxSelect size={size} />,
        onClick: selectAll,
        shortcut: ['meta', 'A'],
      },
      zoomIn: {
        label: '放大',
        icon: <ZoomInOutlined />,
        onClick: () => {
          instance.zoomIn();
        },
        key: 'zoomIn',
      },
      zoomOut: {
        label: '缩小',
        icon: <ZoomOutOutlined />,
        onClick: () => {
          instance.zoomOut();
        },
        key: 'zoomOut',
      },
    }),
    [],
  );
};
