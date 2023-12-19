---
nav:
  title: 组件
  order: 20
group:
  title: 画布
  order: 1
title: FlowView 基础画布容器
order: 1
description:
---

## default

<code src="./demos/ProFlowDemo.tsx"></code>

## API

### FlowView

| 属性名     | 类型                                             | 描述         | 默认值 | 必选 |
| ---------- | ------------------------------------------------ | ------------ | ------ | ---- |
| nodes      | `FlowViewNode`                                   | 边数据       | -      | -    |
| edges      | `FlowViewEdge`                                   | 节点数据     | -      | -    |
| className  | `string`                                         | 边数据       | -      | -    |
| style      | `CSSProperties`                                  | 节点数据     | -      | -    |
| miniMap    | `boolean`                                        | 边数据       | -      | -    |
| autoLayout | `boolean`                                        | 自动布局     | true   | -    |
| background | `boolean`                                        | 节点数据     | -      | -    |
| children   | `React.ReactNode`                                | 边数据       | -      | -    |
| nodeTypes  | `Record<string, React.ComponentType<NodeProps>>` | 节点类型     | -      | -    |
| edgeTypes  | `Record<string, React.ComponentType<EdgeProps>>` | 边缘类型     | -      | -    |
| minZoom    | `number`                                         | 最小缩放比例 | -      | -    |
| maxZoom    | `number`                                         | 最大缩放比例 | -      | -    |

### FlowViewNode

| 属性名 | 类型                                                           | 描述     | 默认值 | 必选 |
| ------ | -------------------------------------------------------------- | -------- | ------ | ---- |
| id     | `string`                                                       | 边数据   | -      | -    |
| select | `SelectType`                                                   | 节点数据 | -      | -    |
| data   | `NodeTypeDataMap[T]`                                           | 边数据   | -      | -    |
| type   | `T = 'default' \| 'BasicNode' \| 'BasicNodeGroup' \| 'string'` | 节点类型 | -      | -    |
| label  | `string`                                                       | 边数据   | -      | -    |
| width  | `number`                                                       | 节点数据 | -      | -    |
| height | `number`                                                       | 边数据   | -      | -    |

#### NodeTypeDataMap[T]

```ts
export interface NodeTypeDataMap {
  default: DefaultNodeData;
  BasicNode: BasicNodeData;
  BasicNodeGroup: BasicGroupNodeData[];
}
```

#### DefaultNodeData

| 属性名    | 类型              | 描述   | 默认值 | 必选 |
| --------- | ----------------- | ------ | ------ | ---- |
| className | `string`          | 类名   | -      | -    |
| children  | `React.ReactNode` | 子组件 | -      | -    |

#### BasicNodeData

| 属性名    | 类型                                                  | 描述 | 默认值 | 必选 |
| --------- | ----------------------------------------------------- | ---- | ------ | ---- |
| title     | `string`                                              | 类名 | -      | -    |
| describe  | `string`                                              | 描述 | -      | -    |
| logo      | `string`                                              | logo | -      | -    |
| titleSlot | `{ type: 'left' \| 'right', value: React.ReactNode }` | 插槽 | -      | -    |

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

### FlowViewEdge

| 属性名 | 类型                                | 描述        | 默认值 | 必选 |
| ------ | ----------------------------------- | ----------- | ------ | ---- |
| id     | `string`                            | 唯一 id     | -      | -    |
| source | `string`                            | 来源节点 id | -      | -    |
| target | `string`                            | 目标节点 id | -      | -    |
| select | `SelectType`                        | 选中状态    | -      | -    |
| type   | `EdgeType = 'default' \| 'radius' ` | 边缘类型    | -      | -    |
