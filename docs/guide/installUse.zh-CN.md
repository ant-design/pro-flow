---
nav:
  title: 快速上手
  order: 10
group:
  title: 快速上手
  order: 2
title: 3分钟快速上手
order: 2
description:
---

# 3 分钟快速上手

## 快速入门

如果您想尽快启动并运行，那么您来对地方了！ 此页面将在几分钟内带您从零到一创建一个有效的 ProFlow 应用程序。如果您想深入的了解 ProFlow 的全部内容，请查看示例，或深入了解 API 文档。

## 创建第一个 ProFlow

引入 FlowView 组件，即可在页面上获得一块带有小地图能力的的画布。

```js
import { FlowView } from '@ant-design/pro-flow';
```

<code src='./demos/quickUse/emptyFLow.tsx'></code>

:::warning
注意：组件必须包裹在具有宽度和高度的元素中。
:::

## 添加节点和边缘数据

现在我们加入一些 nodes 和 edges 的数据。ProFlow 会提供`计算坐标`和`自动布局`的能力

<code src='./demos/quickUse/baseFlow.tsx' defaultShowCode
=”true“ ></code>

## 添加交互性

我们需要一些方法来监听用户与画布的交互，比如选中节点、选中边缘以及取消选中。

- onNodeClick
- onEdgeClick
- onPaneClick

可以通过给 node 或 edge 变更不同的 type 来快速实现主要选中，次要选中，以及不同程度的选中。

<code src='./demos/quickUse/selectFlow.tsx'  defaultShowCode
=”true“></code>
