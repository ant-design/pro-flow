---
group: 画布
title: FlowView 基础画布容器
description:
---

## default

<code src="./demos/ProFlowDemo.tsx"></code>

## API

| 属性名     | 类型                             | 描述     | 默认值  | 必选 |
| ---------- | -------------------------------- | -------- | ------- | ---- |
| nodes      | `Record<string, Edge>`           | 边数据   | -       | -    |
| edges      | `Record<string, IFlowBasicNode>` | 节点数据 | -       | -    |
| className  | `Record<string, Edge>`           | 边数据   | -       | -    |
| style      | `Record<string, IFlowBasicNode>` | 节点数据 | -       | -    |
| miniMap    | `Record<string, Edge>`           | 边数据   | -       | -    |
| background | `Record<string, IFlowBasicNode>` | 节点数据 | -       | -    |
| children   | `Record<string, Edge>`           | 边数据   | -       | -    |
| type       | `FlowNodeType`                   | 节点类型 | lineage | -    |
| width      | `number`                         | 边数据   | -       | -    |
| height     | `number`                         | 节点类型 | lineage | -    |
