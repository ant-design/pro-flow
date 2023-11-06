---
title: ControlInput 可控输入框
group: 控件
description: 针对编辑场景优化的输入框控件
---

针对编辑场景优化的输入框控件：

1. 默认使用提供 回车 / 失焦 作为更新的触发行为；
2. 提供 `onValueChanging`、`onChangeEnd` 事件，用于更细粒度地控制状态变更；
3. 提供显式的重置与保存按钮，用于触发更新行为；
4. 使用中文输入法时，按回车不会直接触发 value 更新，而是正常响应输入法后再触发变更；

## Default

<code src="./demos/index.tsx"></code>

## APIs

继承 antd Input 的所有属性，除此之外还有：

| 属性名          | 类型                      | 描述                           | 默认值 | 必选 |
| --------------- | ------------------------- | ------------------------------ | ------ | ---- |
| value           | `string`                  | 输入框的值                     | -      | -    |
| onChange        | `(value: string) => void` | 输入框内容改变时的回调函数     | -      | -    |
| onValueChanging | `(value: string) => void` | 输入框内容实时变化的回调函数   | -      | -    |
| onChangeEnd     | `(value: string) => void` | 输入框内容改变完成时的回调函数 | -      | -    |
