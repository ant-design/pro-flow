---
nav: 使用文档
group:
  title: 进阶使用
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

这些方法可以用于在前端为一个或多个节点（边缘）标记选中状态。

### selectNode

```js
selectNode: (nodeId: string, selectType: SelectType) => void;
```

#### 参数

- `nodeId` - 节点 Id
  - 类型: `string`
- `selectType` - 选中样式
  - 类型: [SelectType](/components/flow-view#selecttype)

#### 返回值

- 类型: `void`

### selectNodes

```js
selectNodes: (nodeIds: string[], selectType: SelectType) => void;
```

#### 参数

- `nodeIds` - 节点 Id 的数组
  - 类型: `string[]`
- `selectType` - 选中样式

  - 类型: [SelectType](/components/flow-view#selecttype)

### selectEdge

```js
selectEdge: (edgeId: string, selectType: SelectType) => void;
```

#### 参数

- `edgeId` - 边 Id
  - 类型: `string`
- `selectType` - 选中样式

  - 类型: [SelectType](/components/flow-view#selecttype)

### selectEdges

```js
selectEdges: (edgeIds: string[], selectType: SelectType) => void;
```

#### 参数

- `edgeIds` - 边 Id 的数组
  - 类型: `string[]`
- `selectType` - 选中样式
  - 类型: [SelectType](/components/flow-view#selecttype)

#### 返回值

- 类型: `void`

## 画布聚焦

1. zoomTo: 画布缩放；
2. zoomToNode: 快速聚焦到某个节点；
3. getViewport: 获取当前窗口坐标及缩放等级；
4. setViewport: 设置窗口坐标及缩放等级；

### selectNode

```js
zoomTo: (zoomNumber: number, duration?: number) => void;
```

#### 参数

- `zoomNumber` - zoom 等级
  - 类型: `number`
- `duration` - 持续时间
  - 类型: `number`
  - 可选参数

#### 返回值

- 类型: `void`

### selectNode

```js
zoomToNode: (nodeId: string, duration?: number) => void;
```

#### 参数

- `nodeId` - 节点 Id
  - 类型: `string`
- `duration` - 持续时间
  - 类型: `number`
  - 可选参数

#### 返回值

- 类型: `void`

### getViewport

```js
getViewport: () => Viewport;
```

#### 参数

- 无

#### 返回值

- 类型: `Viewport`

```js
type Viewport = {
  x: number,
  y: number,
  zoom: number,
};
```

### setViewport

```js
setViewport: (viewport: Viewport, duration?: number) => void;
```

#### 参数

- `viewport` - 视窗
  - 类型: `Viewport`
- `duration` - 持续时间
  - 类型: `number`
  - 可选参数

#### 返回值

- 类型: `void`

## 小地图

1. setMiniMapPosition: 设置 MiniMap 在窗口的坐标位置

### setMiniMapPosition

```js
setMiniMapPosition: (x: number, y: number) => void;
```

#### 参数

- `x` - x 轴坐标
  - 类型: `number`
- `y` - y 轴坐标
  - 类型: `number`
