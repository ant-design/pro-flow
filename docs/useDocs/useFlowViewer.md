---
nav: 使用文档
group:
  title: Hooks
  order: 2
title: useFlowViewer
description:
---

## 使用方式

使用`FlowViewProvider`来包裹你的组件，即可使用`FlowView`提供的 hook 能力

```js
import { FlowViewProvider, useFlowViewer } from '@ant-design/pro-flow';

function App() {
  const viewer = useFlowViewer();

  return (
    <Container>
      <FlowView nodes={nodes} edges={edges} />
    </Container>
  );
}

function ProApp() {
  return (
    <FlowViewProvider>
      <App />
    </FlowViewProvider>
  );
}
```

## 功能展示

<code src="./demos/useFlowViewer.tsx"></code>

## 节点选中

提供了一组公共节点选中方法，包括：

1. selectNode: 选中节点；
2. selectNodes: 批量选中节点；
3. selectEdge: 选中边缘；
4. selectEdges: 批量选中边缘；

这些方法可以用于在前端对一个包含多个节点的数据结构进行增删改查等操作。其中，updateNodeMeta、updateNodeState 和 updateNodeContent 这三个方法分别用于更新节点的元数据、状态和内容，可以根据实际需求进行选择使用。而 dispatchNodes 方法则可以传入 json 执行指令。

## 节点查询

1. getNode: 查询节点信息
2. getNodes: 批量查询节点信息

## 画布聚焦

1. zoomTo: 画布缩放；
2. getViewport: 获取当前窗口坐标及缩放等级；
3. setViewport: 设置窗口坐标及缩放等级；
   4: zoomToNode: 快速聚焦到某个节点；

## 小地图

1. setMiniMapPosition: 设置 MiniMap 在窗口的坐标位置

### dispatchNodes
