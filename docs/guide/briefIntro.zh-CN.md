---
nav:
  title: 快速上手
  order: 10
group:
  title: 基础介绍
  order: 1
title: 简介
order: 1
description:
---

# 简介

`ProFlow` 是一款功能强大、易用灵活的流程编辑器框架，帮助你轻松构建复杂的工作流和流程产品。

## 特性 1: 更现代化的设计

更现代化的 UI 组件设计，使得编辑出的流程图更像是一个产品，而不是简易流程图。

<video width="100%" controls loop autoPlay>
      <source src="https://gw.alipayobjects.com/v/huamei_d2ejos/afts/video/EjfwSrXlO_YAAAAAAAAAAAAAK4eUAQBr" type="video/mp4">
</video>

<video width="100%" controls loop autoPlay>
      <source src="https://gw.alipayobjects.com/v/huamei_d2ejos/afts/video/z3IKS52t40cAAAAAAAAAAAAAK4eUAQBr" type="video/mp4">
</video>

## 特性 2: 开发者友好的 API

### 更符合 React 的开发方式，上手成本低，开发效率高，细节控制精准，灵活度极高。

```js
import { FlowView, FlowViewProvider } from '@ant-design/pro-flow';
import { nodes, edeges } from './data.ts';

const ProFlowDemo = () => {
  const flowInstance = useFlowView();
  const { setMiniMapPosition } = useMiniMap();

  return (
    <div className={styles.container}>
      <FlowView nodes={_nodes} edges={_edges}></FlowView>
    </div>
  );
};

const FlowDemo = () => {
  return (
    <FlowViewProvider>
      <FlowViewDemo />
    </FlowViewProvider>
  );
};
```

### 更细颗粒度的操控画布与节点

```js
import { useFlowEditor } from '@ant-design/pro-flow';

export default () => {
  const editor = useFlowEditor();
  console.log(editor);
};
```

### 高灵活度

ProFlow 支持自定义节点类型。自定义的节点为 React 组件，所以可以实现任何你需要的东西。
<code src="./demos/baseIntro/customerNode.tsx"></code>

## 3.完善的基本功能

### 无极缩放的 label

<video width="100%" controls loop autoPlay>
      <source src="https://gw.alipayobjects.com/v/huamei_d2ejos/afts/video/7CkrRKWRcSAAAAAAAAAAAAAAK4eUAQBr" type="video/mp4">
</video>

### 节点与边的主辅级选中态

<video width="100%" controls loop autoPlay>
      <source src="https://gw.alipayobjects.com/v/huamei_d2ejos/afts/video/2mAPS5nzfOIAAAAAAAAAAAAAK4eUAQBr" type="video/mp4">
</video>

### 自动布局，排布节点

你只需关注要展示的节点，与节点之间的关系。FlowView 会自动根据节点间的关系给出一个布局效果。

![useFlowEditorHooksAPI](https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*Dg1MTY5vwacAAAAAAAAAAAAADvl6AQ/original)

### 多线重叠时的高亮展示

当有多条边缘重叠在一起时，会自动将高亮的边缘放在画布图层的最顶层。

![useFlowEditorHooksAPI](https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*12JHR7wHTkAAAAAAAAAAAAAADvl6AQ/original)
