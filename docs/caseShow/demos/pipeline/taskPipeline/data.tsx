import { Button } from 'antd';
import { TaskContent } from './nodes/taskContent';
export const ActionBtn = () => {
  return (
    <Button size="small" type="text" onClick={(e) => e.stopPropagation()}>
      action
    </Button>
  );
};

export const nodes = [
  // {
  //   id: 'A',
  //   type: 'group',
  //   data: { label: null },
  //   position: { x: 0, y: 0 },
  //   style: {
  //     width: 300,
  //     height: 500,
  //   },
  // },
  {
    id: 'A',
    type: 'StageNode',
    data: { label: null },
    position: { x: 0, y: 0 },
    zIndex: -1,
    style: {
      width: 300,
      height: 500,
    },
  },
  // {
  //   id: 'B',
  //   type: 'input',
  //   data: { label: 'child node 1' },
  //   position: { x: 10, y: 10 },
  //   style: {
  //     width: 200,
  //     height: 100,
  //   },
  //   parentNode: 'A',
  //   extent: 'parent',
  // },
  // {
  //   id: 'C',
  //   type: 'default',
  //   style: {
  //     width: 200,
  //     height: 100,
  //   },
  //   data: { label: 'child node 2' },
  //   position: { x: 10, y: 90 },
  //   parentNode: 'A',
  //   extent: 'parent',
  // },
  // {
  //   id: 'A',
  //   type: 'group',
  //   data: { label: null },
  //   position: { x: 0, y: 0 },
  //   style: {
  //     width: 170,
  //     height: 140,
  //   },
  // },
  {
    id: 'a1',
    type: 'taskNode',
    parentNode: 'A',
    extent: 'parent',
    position: { x: 10, y: 10 },
    draggable: false,
    // expandParent: true,
    style: {
      width: 240,
      height: 40,
    },
    data: {
      title: '提交申请',
      status: 'success',
      extra: <ActionBtn />,
      children: <TaskContent />,
    },
  },

  {
    id: 'a2',
    type: 'taskNode',
    parentNode: 'A',
    extent: 'parent',
    // expandParent: true,
    position: { x: 10, y: 90 },
    style: {
      width: 240,
      height: 40,
    },
    data: {
      title: '提交申请',
      status: 'success',
      extra: <ActionBtn />,
      children: <TaskContent />,
    },
  },
];

export const edges = [{ id: 'b-c', source: 'a1', target: 'a2' }];
