---
nav:
  title: 组件
  order: 20
group:
  title: 辅助
  order: 10
title: Inspector 属性面板
order: 5
description:
---

## Default

<code src="./demos/index.tsx" center></code>

## APIs

| 属性名       | 类型                | 描述            | 默认值 | 必选 |
| --------- | ----------------- | ------------- | --- | -- |
| className | `string`          | 自定义类名         | -   | -  |
| open      | `boolean`         | 是否展示          | -   | -  |
| width     | `number`          | Inspector 的宽度 | -   | -  |
| onClose   | `()=>void`        | 关闭方法          | -   | -  |
| children  | `React.ReactNode` | 子组件           | -   | -  |
| style     | `CSSProperties`   | style 属性      | -   | -  |
| mask      | `boolean`         | 是否开启遮罩        | -   | -  |
