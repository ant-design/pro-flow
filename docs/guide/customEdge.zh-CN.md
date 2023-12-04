---
nav:
  title: 快速上手
  order: 10
group:
  title: 进阶使用
  order: 3
title: 自定义边缘
order: 3
description:
---

## 自定义边缘

FlowView 内置了 5 中不同的边缘类型：`straight`,`step`,`smoothstep`,`bezier`和`radius`。

```ts
const edges = [{
  id: 'e1',
  type: 'radius',
  ...
}]

```

你也可以像下面的示例一样，自定义边缘。

## 实现自定义边缘

<code src="./demos/customEdge/index.tsx"></code>
