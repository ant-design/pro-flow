---
nav:
  title: 快速上手
  order: 10
group:
  title: 进阶使用
  order: 3
title: 自动布局
order: 1
description:
---

## 自动布局

当你使用 FlowView 组件传入 nodes 和 edges 列表后，FlowView 会自动梳理节点之间的逻辑关系，并给出一个自动布局结果渲染在画布上,比如下面这段关系渲染后的结果如下。

<code src="./demos/autoLayout/demo1.tsx"></code>

## 自定义布局

如果希望自己设置坐标，可以给节点添加 position 属性来控制。

```js
const nodes = [
  {
    id: 'a1',
    position: {
      x: 100,
      y: 300,
    },
    data: {
      title: '节点1',
    },
  },
  {
    id: 'a2',
    position: {
      x: 300,
      y: 600,
    },
    data: {
      title: '节点2',
    },
  },
  ...
];
```

<code src="./demos/autoLayout/demo2.tsx"></code>
