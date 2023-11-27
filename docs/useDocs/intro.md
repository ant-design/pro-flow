---
nav: 快速上手
order: 90
group:
  title: 基础介绍
  order: 1
title: ProFlow 特性
description:
---

## 1. 更现代化的设计

更现代化的 UI 组件设计，使得编辑出的流程图更像是一个产品，而不是简易流程图。

![数据血缘](https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*maMgRb1J65EAAAAAAAAAAAAADvl6AQ/original)

![TechUI AIFlow](https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*FomjTqiZJuMAAAAAAAAAAAAADvl6AQ/original)

## 2. 开发者友好的 API

### 更符合 React 的开发方式，import 的方式导入，hook 的方式处理数据，函数式方式开发

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

### 颗粒度控制，提供简单易用的变更方法

```js
import { useFlowEditor } from '@ant-design/pro-flow';

export default () => {
  const editor = useFlowEditor();
  console.log(editor);
};
```

![useFlowEditorHooksAPI](https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*SAy8QImFmQkAAAAAAAAAAAAADvl6AQ/original)

### 高灵活度

ProFlow 支持自定义节点类型与边缘类型。自定义的节点为 React 组件，所以可以实现任何你需要的东西。

## 3.完善的基本功能

### 无极缩放的 label

![useFlowEditorHooksAPI](https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*yelHRaDzbgQAAAAAAAAAAAAADvl6AQ/original)

### 节点与边的主辅级选中态

![useFlowEditorHooksAPI](https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*yelHRaDzbgQAAAAAAAAAAAAADvl6AQ/original)

### 自动布局，排布节点

![useFlowEditorHooksAPI](https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*xkYKSba1vU8AAAAAAAAAAAAADvl6AQ/original)

### 多线重叠时的高亮展示

![useFlowEditorHooksAPI](https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*9zH3TYNCuygAAAAAAAAAAAAADvl6AQ/original)

### 其他

- 细颗粒度的画布操作，增、删、改、选择、撤销/重做
- 快捷键操作
- 剪切板能力
