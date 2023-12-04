---
nav:
  title: 组件
  order: 20
group:
  title: 节点
  order: 1
title: BasicGroupNode 基础组节点
order: 2
description:
---

## Default

<code src="./demos/index.tsx"></code>

## API

| 属性名 | 类型            | 描述     | 默认值 | 必选 |
| ------ | --------------- | -------- | ------ | ---- |
| id     | `string`        | 节点标题 | -      | -    |
| data   | `BasicNodeData` | 节点描述 | -      | -    |

### BasicNodeData

| 属性名    | 类型                                                | 描述                                                                | 默认值 | 必选 |
| --------- | --------------------------------------------------- | ------------------------------------------------------------------- | ------ | ---- |
| title     | `string`                                            | 节点标题                                                            | -      | -    |
| describe  | `string`                                            | 节点描述                                                            | -      | -    |
| logo      | `string`                                            | 节点 logo 的 url                                                    | -      | -    |
| titleSlot | `{type: 'left' \| 'right', value: React.ReactNode}` | 标题右侧的插槽，left 跟随在 title 文字结尾处，right 在 title 行尾部 | -      | -    |
