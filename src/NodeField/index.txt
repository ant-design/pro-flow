---
group:
  title: 节点
title: NodeField 节点字段
description: 展示节点中的单个字段的组件
---

## 默认

<code src="./demos/index.tsx" center></code>

## 扩展动作项

<code src="./demos/actions.tsx" center></code>

## 结合 EditNode 使用

结合 EditNode 快速构建节点字段项

<code src="../EditNode/demos/PreviewField.tsx" center></code>

## APIs

| 属性名            | 类型                                                                  | 描述                                            | 默认值 | 必选 |
| ----------------- | --------------------------------------------------------------------- | ----------------------------------------------- | ------ | ---- |
| id                | `string`                                                              | 节点的唯一标识符                                | -      | 必选 |
| title             | `ReactNode`                                                           | 节点标题，可以是任意 ReactNode                  | -      | -    |
| extra             | `ExtraAction[]`                                                       | 额外的操作项，每个元素为一个 `ExtraAction` 对象 | -      | -    |
| collapsed         | `boolean`                                                             | 是否折起                                        | false  | -    |
| onCollapsedChange | `(collapsed: boolean) => void`                                        | 折叠状态变化时的回调函数                        | -      | -    |
| valueContainer    | `boolean`                                                             | 值区域是否使用容器包裹                          | true   | -    |
| handles           | `{ source?: true \| string; target?: true \| string; }`               | 是否开启输入输出 handle                         | -      | -    |
| style             | `CSSProperties`                                                       | 自定义样式                                      | -      | -    |
| className         | `string`                                                              | 自定义类名                                      | -      | -    |
| classNames        | `{ extra?: string; value?: string; header?: string; title?: string }` | 自定义类名组                                    | -      | -    |
| children          | `ReactNode`                                                           | 子节点                                          | -      | -    |

### ExtraAction

| 属性名  | 类型         | 描述                     | 默认值 | 必选 |
| ------- | ------------ | ------------------------ | ------ | ---- |
| title   | `string`     | 操作的名称               | 无     | -    |
| icon    | `ReactNode`  | 操作的图标               | 无     | -    |
| onClick | `() => void` | 点击操作时触发的回调函数 | 无     | -    |
