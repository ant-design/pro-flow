---
group: 节点
title: LineageGroupNode 血缘组节点
description: 无法单独使用。在FlowView中将节点类型设置为'lineage'后使用。
---

## Default

<code src="./demos/index.tsx"></code>

## API

| 属性名 | 类型              | 描述     | 默认值 | 必选 |
| ------ | ----------------- | -------- | ------ | ---- |
| id     | `string`          | 节点标题 | -      | -    |
| data   | `LineageNodeData` | 节点描述 | -      | -    |

### LineageNodeData

| 属性名    | 类型                                                | 描述                                                                | 默认值 | 必选 |
| --------- | --------------------------------------------------- | ------------------------------------------------------------------- | ------ | ---- |
| title     | `string`                                            | 节点标题                                                            | -      | -    |
| describe  | `string`                                            | 节点描述                                                            | -      | -    |
| logo      | `string`                                            | 节点 logo 的 url                                                    | -      | -    |
| titleSlot | `{type: 'left' \| 'right', value: React.ReactNode}` | 标题右侧的插槽，left 跟随在 title 文字结尾处，right 在 title 行尾部 | -      | -    |
