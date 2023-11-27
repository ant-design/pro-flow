---
title: 自动布局
nav:
  title: 快速上手
  order: 0
group:
  title: 进阶使用
  order: 2
description:
---

## 自动布局

当你使用 FlowView 组件传入 nodes 和 edges 列表后，FlowView 会自动梳理节点之间的逻辑关系，并给出一个自动布局结果渲染在画布上,比如下面这段关系渲染后的结果如下。

```js
const nodes = [
  {
    id: 'a1',
    data: {
      title: '节点1',
    },
  },
  {
    id: 'a2',
    data: {
      title: '节点2',
    },
  },
  {
    id: 'a3',
    data: {
      title: '节点3',
    },
  },
  {
    id: 'a4',
    data: {
      title: '节点4',
    },
  },
  {
    id: 'a5',
    data: {
      title: '节点5',
    },
  },
  {
    id: 'a6',
    data: {
      title: '节点6',
    },
  },
];

const edges = [
  {
    source: 'a1',
    target: 'a2',
  },
  {
    source: 'a1',
    target: 'a3',
  },
  {
    source: 'a2',
    target: 'a3',
  },
  {
    source: 'a3',
    target: 'a6',
  },
  {
    source: 'a2',
    target: 'a4',
  },
  {
    source: 'a3',
    target: 'a5',
  },
  {
    source: 'a2',
    target: 'a6',
  },
];

function App() {
  return (
    <Container>
      <FlowView nodes={nodes} edges={edges} miniMap={false} />
    </Container>
  );
}

export default App;
```

布局效果如下所示：
<code src="./demos/autoLayoutDemo1.tsx"></code>

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

<code src="./demos/autoLayoutDemo2.tsx"></code>

## 关闭自动布局

你也可以在 FlowView 中直接关闭自动布局功能

```js
<FlowView nodes={nodes} edges={edges} miniMap={false} autoLayout={false} />
```

:::info
当你关掉自动布局能力，并且没有为节点单独设置坐标，那么 FlowView 会将节点的坐标初始化为 1,1。效果上就是所有的节点重合在一起。
:::

<code src="./demos/autoLayoutDemo3.tsx"></code>
