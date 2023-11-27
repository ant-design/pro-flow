---
nav: 快速上手
order: 90
group:
  title: 进阶使用
  order: 3
title: useFlowEditor
description:
---

```ts
import { useFlowEditor } from '@ant-design/pro-flow';

export default () => {
  const editor = useFlowEditor();
};
```

## 节点操作

提供了一组公共节点操作方法，包括：

1. dispatchNodes：聚合操作节点；
2. addNode：添加节点；
3. deleteNode：移除指定 id 的节点；
4. updateNodeMeta：更新节点元数据；
5. updateNodeState：更新节点状态；
6. updateNodeContent：更新节点内容。

这些方法可以用于在前端对一个包含多个节点的数据结构进行增删改查等操作。其中，updateNodeMeta、updateNodeState 和 updateNodeContent 这三个方法分别用于更新节点的元数据、状态和内容，可以根据实际需求进行选择使用。而 dispatchNodes 方法则可以传入 json 执行指令。

### dispatchNodes

```ts
dispatchNodes: (payload: NodeDispatch, options?: NodeActionOptions) => void;
```

分发节点操作

#### 参数

- `payload` - 节点操作的载荷
  - 类型: `NodeDispatch`
- `options` - 节点操作的选项
  - 类型: `NodeActionOptions`
  - 可选参数

#### 返回值

- 类型: `void`

### addNode

```ts
addNode: (node: Node, index?: number) => void;
```

添加节点到指定位置

#### 参数

- `node` - 要添加的节点
  - 类型: `Node`
- `index` - 要添加到的位置，默认为末尾
  - 类型: `number`
  - 可选参数

#### 返回值

- 类型: `void`

### deleteNode

```ts
deleteNode: (id: string) => void;
```

移除指定 id 的节点

#### 参数

- `id` - 要移除的节点 id
  - 类型: `string`

#### 返回值

- 类型: `void`

### updateNodeMeta

```ts
updateNodeMeta: <T extends keyof MetaData>(
  id: string,
  key: T,
  value: MetaData[T],
  options?: NodeActionOptions,
) => void;
```

更新节点元数据

#### 参数

- `id` - 要更新的节点 id
  - 类型: `string`
- `key` - 要更新的元数据键名
  - 类型: `T`
  - 泛型参数，必须是 `MetaData` 中的键名
- `value` - 要更新的元数据值
  - 类型: `MetaData[T]`
- `options` - 节点操作的选项
  - 类型: `NodeActionOptions`
  - 可选参数

#### 返回值

- 类型: `void`

### updateNodeState

```ts
updateNodeState: <T extends keyof NodeState>(
  id: string,
  key: T,
  value: NodeState[T],
  options?: NodeActionOptions,
) => void;
```

更新节点状态

#### 参数

- `id` - 要更新的节点 id
  - 类型: `string`
- `key` - 要更新的状态键名
  - 类型: `T`
  - 泛型参数，必须是 `NodeState` 中的键名
- `value` - 要更新的状态值
  - 类型: `NodeState[T]`
- `options` - 节点操作的选项
  - 类型: `NodeActionOptions`
  - 可选参数

#### 返回值

- 类型: `void`

### updateNodeContent

```ts
updateNodeContent: <T extends object>(
  id: string,
  key: keyof T,
  value: T[keyof T],
  options?: NodeActionOptions,
) => void;
```

更新节点内容

#### 参数

- `id` - 要更新的节点 id
  - 类型: `string`
- `key` - 要更新的内容键名
  - 类型: `keyof T`
  - 泛型参数，必须是 `T` 中的键名
- `value` - 要更新的内容值
  - 类型: `T[keyof T]`
- `options` - 节点操作的选项
  - 类型: `NodeActionOptions`
  - 可选参数

#### 返回值

- 类型: `void`

## 选择操作

### selectAll

```ts
selectAll: () => void;
```

选择全部元素

#### 返回值

- 类型: `void`

### selectElement

```ts
selectElement: (id: string) => void;
```

选择指定元素

#### 参数

- `id` - 元素 ID
- 类型: `string`

#### 返回值

- 类型: `void`

### deselectElement

```ts
deselectElement: (id: string) => void;
```

取消选择指定元素

#### 参数

- `id` - 元素 ID
- 类型: `string`

#### 返回值

- 类型: `void`

### deleteSelection

```ts
deleteSelection: () => void;
```

删除所选元素

#### 返回值

- 类型: `void`

## 撤销/重做

### undo

```ts
undo: () => void;
```

撤销上一步操作

#### 返回值

- 类型: `void`

### redo

```ts
redo: () => void;
```

重做上一步操作

#### 返回值

- 类型: `void`
