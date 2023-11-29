---
nav:
  title: 快速上手
  order: 10
group:
  title: 进阶使用
  order: 3
title: 自定义节点
order: 2
description:
---

## 自定义节点

ProFlow 的一个强大功能是能够添加自定义节点。在自定义节点中，您可以渲染所需的所有内容。例如，您可以定义多个源句柄和目标句柄，并呈现表单输入或图表。在本节中，我们将实现一个带有输入字段的节点，该输入字段更新应用程序另一部分中的一些文本。

## 实现自定义节点

让我们开始实现：声明一个自定义节点`CustomNode`组件。

```js
function CustomNode({ data }) {
  return <div>组件源码见下方示例</div>;
}
```

## 添加节点类型

你可以将新的节点类型添加到 prop 中传递给 FlowView。

:::warning
**在组件外部定义或缓存`nodeTypes`非常重要。** 否则 React 会在每次渲染时创建一个新的对象，这会导致性能问题和错误。
:::

```js
const nodeTypes = { customNode: CustomNode };

function App() {
  return (
    <div className="container">
      <FlowView nodes={nodes} edges={[]} nodeTypes={nodeTypes} />
    </div>
  );
}
```

定义新节点类型后，可以在 nodes 列表中使用这个类型了。

```js
const nodes = [
  {
    id: 'n1',
    type: 'customNode',
    data,
  },
];
```

然后你就可以得到如下的自定义节点效果。
<code src="./demos/customNode/index.tsx"></code>

## 使用多个 Handle

当一个节点拥有多个 Handle 时，在连接时只传递节点 Id 是不够的，还需要传递特定的 HandleId。

```js
const initialEdge = [
  {
    id: 'edge-1',
    source: 'a1',
    target: 'a2',
    type: edgeType,
    sourceHandle: 'a1-1-source',
    targetHandle: 'a2-1-target',
  },
  ...
];
```

:::warning
自定义节点可以通过传入 width 和 height 属性来调节自动布局后的节点位置。

自定义节点 width 越大，两个节点的水平间距就越大。height 同理。
:::

```js
const nodes = [
  {
    id: 'a1',
    type: 'customNode',
    width: 250,
    height: 150,
    data,
  },
];
```

效果如下：
<code src="./demos/customNode/multiHandle.tsx"></code>
