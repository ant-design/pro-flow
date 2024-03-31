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
  {
    id: 'A',
    type: 'StageNode',
    position: { x: 100, y: 100 },
    data: {
      title: '配置校验',
      extra: <div style={{ cursor: 'pointer', marginRight: '10px' }}>+</div>,
      children: [
        {
          id: 'task1',
          title: '提交申请',
          status: 'success',
          extra: <ActionBtn />,
          isOpen: false,
          children: <TaskContent />,
        },
        {
          id: 'task2',
          title: '提交申请123',
          status: 'success',
          extra: <ActionBtn />,
          isOpen: false,
          children: <TaskContent />,
        },
      ],
    },
    zIndex: -1,
  },
  {
    id: 'B',
    type: 'StageNode',
    position: { x: 400, y: 100 },
    data: {
      title: '多任务并行',
      children: [
        {
          id: 'b1',
          title: '提交申请',
          status: 'success',
          isOpen: false,
        },
        {
          id: 'b2',
          title: '提交申请',
          status: 'success',
          isOpen: true,
          children: <TaskContent />,
        },
        {
          id: 'b3',
          title: '提交申请123',
          status: 'success',
          isOpen: false,
          children: <TaskContent />,
        },
      ],
    },
    zIndex: -1,
  },
  {
    id: 'C',
    type: 'StageNode',
    position: { x: 700, y: 100 },
    data: {
      title: '阶段名称',
      children: [
        {
          id: 'c1',
          title: '提交申请',
          status: 'success',
          extra: <ActionBtn />,
          isOpen: false,
          children: <TaskContent />,
        },
        {
          id: 'c2',
          title: '提交申请123',
          status: 'success',
          extra: <ActionBtn />,
          isOpen: false,
          children: <TaskContent />,
        },
      ],
    },
    zIndex: -1,
  },
  {
    id: 'D',
    type: 'StageNode',
    position: { x: 1000, y: 100 },
    data: {
      title: '阶段名称',
      children: [
        {
          id: 'd1',
          title: '提交申请',
          status: 'success',
          extra: <ActionBtn />,
          isOpen: false,
          children: <TaskContent />,
        },
      ],
    },
    zIndex: -1,
  },
];

export const edges = [
  {
    id: 'A-B',
    source: 'A',
    target: 'B',
    sourceHandle: 'task1',
    targetHandle: 'b2',
    type: 'bezier',
  },
  {
    id: 'A-B2',
    source: 'A',
    target: 'B',
    sourceHandle: 'task1',
    type: 'bezier',
    targetHandle: 'b3',
  },
  {
    id: 'B-C',
    source: 'B',
    target: 'C',
    sourceHandle: 'b1',
    type: 'bezier',
    targetHandle: 'c1',
  },
  {
    id: 'B-C2',
    source: 'B',
    target: 'C',
    sourceHandle: 'b2',
    type: 'bezier',
    targetHandle: 'c1',
  },
  {
    id: 'B-C3',
    source: 'B',
    target: 'C',
    sourceHandle: 'b3',
    type: 'bezier',
    targetHandle: 'c2',
  },
  {
    id: 'C-D',
    source: 'C',
    target: 'D',
    sourceHandle: 'c1',
    type: 'bezier',
    targetHandle: 'd1',
  },
  {
    id: 'C-D2',
    source: 'C',
    target: 'D',
    sourceHandle: 'c2',
    type: 'bezier',
    targetHandle: 'd1',
  },
];
