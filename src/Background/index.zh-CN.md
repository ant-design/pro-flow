---
nav:
  title: 组件
  order: 20
group:
  title: 辅助
  order: 10
title: Background 画布背景
order: 1
description:
---

## Default

<code src="./demos/index.tsx" center></code>

## Double Background

<code src="./demos/double.tsx" center></code>

## APIs

| 属性名       | 类型                          | 描述                                      | 默认值 | 必选 |
| --------- | --------------------------- | --------------------------------------- | --- | -- |
| id        | `string`                    | 如果要显示多个背景，则需要                           | -   | -  |
| className | `string`                    | 自定义类名                                   | -   | -  |
| variant   | `BackgroundVariant`         | 背景图案类型                                  | -   | -  |
| gap       | `number \|[number, number]` | 模式之间的差距。您可以传递一个包含两个数字的数组来指定 x 间隙和 y 间隙。 | -   | -  |
| size      | `number`                    | ” 点 “的半径或” 十字 “的尺寸                      | -   | -  |
| lineWidth | `number`                    | ” 线 “或” 十字 “的宽度                         | -   | -  |
| offset    | `number`                    | 图案偏移                                    | -   | -  |
| color     | `string`                    | 图案颜色                                    | -   | -  |
| style     | `CSSProperties`             | 样式属性                                    | -   | -  |

### BackgroundVariant

| 属性名   | 类型       | 描述 | 默认值 | 必选 |
| ----- | -------- | -- | --- | -- |
| lines | `string` | 线  | -   | -  |
| dots  | `string` | 点  | -   | -  |
| cross | `string` | 十字 | -   | -  |
