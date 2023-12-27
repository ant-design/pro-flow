---
nav:
  title: 组件
  order: 20
group:
  title: 辅助
  order: 10
title: FlowPanel 画布面板
order: 2
description:
---

## Default

<code src="./demos/index.tsx" center></code>

## APIs

| 属性名       | 类型              | 描述        | 默认值          | 必选 |
| --------- | --------------- | --------- | ------------ | -- |
| className | `string`        | 自定义类名     | -            | -  |
| visible   | `boolean`       | 是否展示      | -            | -  |
| position  | `PanelPosition` | 面板在画布中的位置 | 'top-center' | -  |

### PanelPosition

```ts
type PanelPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
```
