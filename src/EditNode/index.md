---
nav:
  title: 组件
  order: 20
group:
  title: 节点
  order: 2
title: EditNode 可编辑节点
order: 10
description:
---

我们在 FlowEditor 中提供了 EditNode 的基础节点，方便定制样式。

## 基础节点

## 预览模式

EditNode 组件提供了 `Preview` 子组件用于画布之外的预览。

<code src="./demos/Preview.tsx"></code>

## 搭配 Field 组件使用

pro-flow-editor 提供 NodeField 组件，可以搭配 EditNode 使用，两者关系就像 antd 的 Form 和 Form.Item。

<code src="./demos/PreviewField.tsx"></code>

## collapsedKeys 受控折叠与展开

搭配 Field 使用时，可以通过 collapsedKeys 和 onCollapsedKeysChange 控制折叠的字段。

<code src="./demos/FieldCollapse.tsx"></code>

## APIs

### EditNode.Preview 预览组件

| 属性名                   | 类型                                  | 描述            | 默认值  | 必选 |
| --------------------- | ----------------------------------- | ------------- | ---- | -- |
| title                 | `string`                            | 标题            | -    | -  |
| onTitleChange         | `(title: string) => void`           | 标题变化时的回调函数    | -    | -  |
| extra                 | `ReactNode`                         | 标题右侧区域        | -    | -  |
| children              | `ReactNode`                         | 子元素 ReactNode | -    | -  |
| active                | `boolean`                           | 是否激活状态        | -    | -  |
| collapsedKeys         | `string[]`                          | 折叠的键数组        | `[]` | -  |
| onCollapsedKeysChange | `(collapsedKeys: string[]) => void` | 折叠键数组变化时的回调函数 | -    | -  |
| style                 | `CSSProperties`                     | 自定义样式         | -    | -  |
| className             | `string`                            | 自定义类名         | -    | -  |

### EditNode 组件

在 Preview 基础上：

| 属性名 | 类型       | 描述    | 默认值 | 必选 |
| --- | -------- | ----- | --- | -- |
| id  | `string` | 节点 Id | -   | 是  |
