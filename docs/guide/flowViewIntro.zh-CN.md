---
nav:
  title: 快速上手
  order: 10
group:
  title: 基础使用
  order: 3
title: FlowView - 图展示
order: 1
description:
---

# FlowView - 图展示组件

## 基本用法

引入 FlowView 组件，即可在页面上获得一块带有小地图能力的的画布。

```js
import { FlowView } from '@ant-design/pro-flow';
```

<code src='./demos/flowViewIntro/baseMiniMap.tsx'></code>

## 小地图受控

```js
<FlowView nodes={[]} edges={[]} miniMap={open} />
```

<code src='./demos/flowViewIntro/noMiniMap.tsx'></code>

## 自动布局

默认情况下，你只需要向 FlowView 传递 nodes 和 edges，FlowView 将自动完成布局。

```js
<FlowView nodes={nodes} edges={edges} />
```

<code src='./demos/flowViewIntro/autoFlow.tsx'></code>

## 手动布局

当然也可以关闭自动布局，选择手动传入节点位置。

```js
<FlowView nodes={nodes} edges={edges} autoLayout={false} />
```

节点坐标属性

```js
const nodes = [
  {
    id: 'a1',
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'a2',
    position: {
      x: 500,
      y: -200,
    },
  },
  {
    id: 'a3',
    position: {
      x: 500,
      y: 200,
    },
  },
];
```

<code src='./demos/flowViewIntro/noAutoFlow.tsx'></code>

## 节点拖拽

<code src='./demos/flowViewIntro/dragableNode.tsx'></code>

## 参数配置

### FlowView

| 属性名     | 类型                                             | 描述     | 默认值 | 必选 |
| ---------- | ------------------------------------------------ | -------- | ------ | ---- |
| nodes      | `FlowViewNode`                                   | 边数据   | -      | -    |
| edges      | `FlowViewEdge`                                   | 节点数据 | -      | -    |
| className  | `string`                                         | 边数据   | -      | -    |
| style      | `CSSProperties`                                  | 节点数据 | -      | -    |
| miniMap    | `boolean`                                        | 边数据   | -      | -    |
| autoLayout | `boolean`                                        | 自动布局 | true   | -    |
| background | `boolean`                                        | 节点数据 | -      | -    |
| children   | `React.ReactNode`                                | 边数据   | -      | -    |
| nodeTypes  | `Record<string, React.ComponentType<NodeProps>>` | 节点类型 | -      | -    |
| edgeTypes  | `Record<string, React.ComponentType<EdgeProps>>` | 边缘类型 | -      | -    |

## 更多信息

> 组件文档： [FlowView](/components/flow-view)
