---
nav:
  title: 快速上手
  order: 10
group:
  title: 基础介绍
  order: 1
title: 术语和定义
order: 2
description:
---

# 术语和定义

## Nodes - 节点

ProFlow 中的节点是一个 React 组件。这意味着它可以渲染您喜欢的任何内容。每个节点都有一个 x 和 y 坐标，这告诉它它在视口中的位置。在不设置 type 的情况下，FlowView 组件默认会把组件设置为[BasicNode](/components/lineage-node)类型的节点。你也可以自定义节点类型。

<code src="./demos/baseIntro/coreNode.tsx"></code>

### Custom Nodes - 自定义节点

[自定义节点使用说明](/components/customNodeDoc)
<code src="./demos/baseIntro/customerNode.tsx"></code>

## Edges - 边缘

一条 Edge 连接两个节点。每个边缘都需要一个`source` 和 一个`target`。 ProFlow 内置了五种边缘类型：

- 'straight'
- 'step'
- 'smoothstep'
- 'bezier'
- 'radius' 。

FlowView 把 `smoothstep` 设置为默认类型。 你也可以自定义边缘类型。

<code src="./demos/baseIntro/coreEdge.tsx"></code>

## Handles - 连接桩

`Handle` 可以翻译为 “**连接桩**”，是边缘连接到节点的位置。`Handle`可以放置在任何地方。

可以用以下方式式引入 `Handle` 与 `Position`，来自定义 `Handle` 在节点中的位置。

```ts
import { Handle, type Position } from '@ant-design/pro-flow';
```

<code src="./demos/baseIntro/coreHandle.tsx"></code>
