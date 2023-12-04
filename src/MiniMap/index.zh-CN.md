---
nav:
  title: 组件
  order: 20
group:
  title: 辅助
  order: 10
title: MiniMap 小地图
order: 3
description:
---

## Default

<code src="./demos/FlowControllerDemo.tsx" center></code>

## APIs

| 属性名    | 类型              | 描述                 | 默认值 | 必选 |
| --------- | ----------------- | -------------------- | ------ | ---- |
| className | `string`          | 自定义类名           | -      | -    |
| visible   | `boolean`         | 是否展示             | -      | -    |
| position  | `MiniMapPosition` | 控制器在画布中的坐标 | -      | -    |

### MiniMapPosition

| 属性名 | 类型     | 描述                           | 默认值 | 必选 |
| ------ | -------- | ------------------------------ | ------ | ---- |
| x      | `number` | x 坐标，正数向左偏移，负数反之 | 0      | -    |
| y      | `number` | y 坐标，正数向上偏移，负数反之 | 0      | -    |
