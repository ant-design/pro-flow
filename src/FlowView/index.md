---
group: 画布
title: FlowView 基础画布容器
description:
---

## default

<code src="./demos/ProFlowDemo.tsx"></code>

## API

| 属性名     | 类型              | 描述     | 默认值 | 必选 |
| ---------- | ----------------- | -------- | ------ | ---- |
| nodes      | `FlowViewNode`    | 边数据   | -      | -    |
| edges      | `FlowViewEdge`    | 节点数据 | -      | -    |
| className  | `string`          | 边数据   | -      | -    |
| style      | `CSSProperties`   | 节点数据 | -      | -    |
| miniMap    | `boolean`         | 边数据   | -      | -    |
| background | `boolean`         | 节点数据 | -      | -    |
| children   | `React.ReactNode` | 边数据   | -      | -    |

### FlowViewNode

| 属性名 | 类型                                           | 描述         | 默认值 | 必选 |
| ------ | ---------------------------------------------- | ------------ | ------ | ---- |
| id     | `string`                                       | 边数据       | -      | -    |
| select | `NodeSelect`                                   | 节点数据     | -      | -    |
| data   | `NodeTypeDataMap[T]`                           | 边数据       | -      | -    |
| type   | `T = 'default' \| 'lineage' \| 'lineageGroup'` | 节点类型（） | -      | -    |
| label  | `string`                                       | 边数据       | -      | -    |
| width  | `number`                                       | 节点数据     | -      | -    |
| height | `number`                                       | 边数据       | -      | -    |

#### NodeTypeDataMap[T]

```ts
export interface NodeTypeDataMap {
  default: DefaultNodeData;
  lineage: LineageNodeData;
  lineageGroup: LineageGroupNodeData[];
}
```

#### DefaultNodeData

| 属性名    | 类型              | 描述   | 默认值 | 必选 |
| --------- | ----------------- | ------ | ------ | ---- |
| className | `string`          | 类名   | -      | -    |
| children  | `React.ReactNode` | 子组件 | -      | -    |

#### LineageNodeData

| 属性名    | 类型                                                  | 描述 | 默认值 | 必选 |
| --------- | ----------------------------------------------------- | ---- | ------ | ---- |
| title     | `string`                                              | 类名 | -      | -    |
| describe  | `string`                                              | 描述 | -      | -    |
| logo      | `string`                                              | logo | -      | -    |
| titleSlot | `{ type: 'left' \| 'right', value: React.ReactNode }` | 插槽 | -      | -    |

#### LineageGroupNodeData

| 属性名 | 类型              | 描述   | 默认值 | 必选 |
| ------ | ----------------- | ------ | ------ | ---- |
| id     | `string`          | 类名   | -      | -    |
| data   | `LineageNodeData` | 子组件 | -      | -    |

#### NodeSelect

```ts
export enum NodeSelect {
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
| select | `NodeSelect`                        | 选中状态    | -      | -    |
| type   | `EdgeType = 'default' \| 'radius' ` | 边缘类型    | -      | -    |
