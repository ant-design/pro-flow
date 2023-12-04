---
nav:
  title: 快速上手
  order: 10
group:
  title: 基础使用
  order: 3
title: FlowEditor - 图编辑
order: 2
description:
---

# FlowView - 图展示组件

## 基本用法

引入 FlowView 组件，即可在页面上获得一块带有小地图能力的的画布。

```js
import { FlowEditor } from '@ant-design/pro-flow';

const editor = useFlowEditor();

<FlowEditor nodeTypes={{ StringNode: StringRender }} />;
```

<code src='./demos/flowEditor/base.tsx'></code>

## 数据受控

<code src='./demos/flowEditor/proBase.tsx'></code>

<!-- 下一期补充 -->
<!-- ## 拖拽插入节点

<code src='./demos/flowEditor/dragAddNode.tsx'></code> -->

## 可编辑节点

<code src="./demos/flowEditor/editFlowDemo.tsx"></code>
