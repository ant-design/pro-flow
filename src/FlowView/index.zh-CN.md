---
nav:
  title: 组件
  order: 20
group:
  title: 画布
  order: 1
title: FlowView 基础画布容器
order: 1
description: 基础画布容器
---

## default

<code src="./demos/ProFlowDemo.tsx"></code>

## API

### FlowView

| 属性名            | 类型                                             | 描述           | 默认值 | 必选 |
| ----------------- | ------------------------------------------------ | -------------- | ------ | ---- |
| nodes             | `FlowViewNode`                                   | 边数据         | -      | -    |
| edges             | `FlowViewEdge`                                   | 节点数据       | -      | -    |
| className         | `string`                                         | 边数据         | -      | -    |
| style             | `CSSProperties`                                  | 节点数据       | -      | -    |
| miniMap           | `boolean`                                        | 边数据         | -      | -    |
| autoLayout        | `boolean`                                        | 自动布局       | true   | -    |
| background        | `boolean`                                        | 节点数据       | -      | -    |
| children          | `React.ReactNode`                                | 边数据         | -      | -    |
| nodeTypes         | `Record<string, React.ComponentType<NodeProps>>` | 节点类型       | -      | -    |
| edgeTypes         | `Record<string, React.ComponentType<EdgeProps>>` | 边缘类型       | -      | -    |
| minZoom           | `number`                                         | 最小缩放比例   | -      | -    |
| maxZoom           | `number`                                         | 最大缩放比例   | -      | -    |
| stepLessZooming   | `boolean`                                        | 无级缩放监听   | -      | -    |
| layoutOptions     | `LayoutOptions`                                  | 自动布局参数   | -      | -    |
| beforeNodesChange | `(changes: NodeChange[]) => boolean`             | 节点变化前回调 | -      | -    |
| beforeEdgesChange | `(changes: EdgeChange[]) => boolean`             | 边缘变化前回调 | -      | -    |
| beforeConnect     | `(connection: Connection) => boolean`            | 连接前回调     | -      | -    |

#### LayoutOptions

| 属性名  | 类型                           | 描述         | 默认值 | 必选 |
| ------- | ------------------------------ | ------------ | ------ | ---- |
| rankdir | `'TB' \| 'BT' \| 'LR' \| 'RL'` | 无级缩放监听 | -      | -    |
| align   | `'UL' \| 'DL' \| 'UR' \| 'DR'` | 无级缩放监听 | -      | -    |
| nodesep | `number`                       | 自动布局参数 | -      | -    |
| ranksep | `number`                       | 自动布局参数 | -      | -    |

### FlowViewNode

| 属性名   | 类型                                              | 描述     | 默认值 | 必选 |
| -------- | ------------------------------------------------- | -------- | ------ | ---- |
| id       | `string`                                          | 边数据   | -      | -    |
| select   | `SelectType`                                      | 节点数据 | -      | -    |
| data     | `T`                                               | 边数据   | -      | -    |
| type     | `U = 'BasicNode' \| 'BasicNodeGroup' \| 'string'` | 节点类型 | -      | -    |
| label    | `string`                                          | 边数据   | -      | -    |
| width    | `number`                                          | 节点数据 | -      | -    |
| height   | `number`                                          | 边数据   | -      | -    |
| position | `{x: number, y: number}`                          | 边数据   | -      | -    |

#### BasicNodeData

| 属性名      | 类型                                                  | 描述 | 默认值 | 必选 |
| ----------- | ----------------------------------------------------- | ---- | ------ | ---- |
| title       | `string`                                              | 类名 | -      | -    |
| description | `string`                                              | 描述 | -      | -    |
| logo        | `string`                                              | logo | -      | -    |
| titleSlot   | `{ type: 'left' \| 'right', value: React.ReactNode }` | 插槽 | -      | -    |

#### BasicGroupNodeData

| 属性名 | 类型            | 描述   | 默认值 | 必选 |
| ------ | --------------- | ------ | ------ | ---- |
| id     | `string`        | 类名   | -      | -    |
| data   | `BasicNodeData` | 子组件 | -      | -    |

#### SelectType

```ts
export enum SelectType {
  SELECT = 'SELECT',
  SUB_SELECT = 'SUB_SELECT',
  DANGER = 'DANGER',
  SUB_DANGER = 'SUB_DANGER',
  WARNING = 'WARNING',
  SUB_WARNING = 'SUB_WARNING',
  DEFAULT = 'DEFAULT',
}
```

#### Connection

| 属性名       | 类型             | 描述                 | 默认值 | 必选 |
| ------------ | ---------------- | -------------------- | ------ | ---- |
| source       | `string \| null` | 来源节点 id          | -      | -    |
| target       | `string \| null` | 目标节点 id          | -      | -    |
| sourceHandle | `string \| null` | 来源节点的 Handle id | -      | -    |
| targetHandle | `string \| null` | 目标节点的 Handle id | -      | -    |

### FlowViewEdge

| 属性名       | 类型         | 描述                 | 默认值 | 必选 |
| ------------ | ------------ | -------------------- | ------ | ---- |
| id           | `string`     | 唯一 id              | -      | -    |
| source       | `string`     | 来源节点 id          | -      | -    |
| target       | `string`     | 目标节点 id          | -      | -    |
| sourceHandle | `string`     | 来源节点的 Handle id | -      | -    |
| targetHandle | `string`     | 目标节点的 Handle id | -      | -    |
| select       | `SelectType` | 选中状态             | -      | -    |
| type         | `U`          | 边缘类型             | -      | -    |
| data         | `T`          | 数据                 | -      | -    |
| animated     | `boolean`    | 动态效果             | -      | -    |
