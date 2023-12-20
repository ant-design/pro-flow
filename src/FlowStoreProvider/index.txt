---
nav:
  title: 组件
  order: 20
group:
  title: 其他
  order: 20
title: FlowStoreProvider 流数据容器
order: 1
atomId: FlowStoreProvider
description:
---

# FlowStoreProvider

FlowStoreProvider 是为 Flow 的纯数据场景提供的一个数据变更解决方案。如果你不想渲染画布，只想使用 Flow 的数据结构，那么你可以使用 FlowStoreProvider 来解决数据变更的问题。

<code src="./demos/FlowStoreProvider.tsx"></code>

## API

FlowStoreProvider 所支持的 props，核心数据包括 flattenNodes 和 flattenEdges

| 属性名               | 类型                                   | 描述                           | 默认值 | 必选 |
| -------------------- | -------------------------------------- | ------------------------------ | ------ | ---- |
| flattenEdges         | `Record<string, Edge>`                 | 边数据                         | -      | -    |
| flattenNodes         | `Record<string, IFlowBasicNode>`       | 节点数据                       | -      | -    |
| onFlattenNodesChange | `(nodes:IFlattenNodes)=>void`          | 当节点发生改变时的回调函数     | -      | -    |
| onFlattenEdgesChange | `(edges:IFlattenEdges)=>void`          | 当边发生改变时的回调函数       | -      | -    |
| onEdgesChange        | -                                      | 当边数组发生改变时的回调函数   | -      | -    |
| onNodesChange        | -                                      | 当节点数组发生改变时的回调函数 | -      | -    |
| onNodesTreeChange    | -                                      | 当节点树发生改变时的回调函数   | -      | -    |
| editorRef            | `MutableRefObject<FlowEditorInstance>` | 编辑器实例的可变引用对象       | -      | -    |
