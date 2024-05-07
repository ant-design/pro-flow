---
nav:
  title: 组件
  order: 20
group:
  title: 辅助
  order: 10
title: Awareness 协同感知套件
---

# Awareness 协同感知套件

Awareness 代表着用户在应用内的运动和行为。用户能够实时看到其他人正在做什么。

## 代码演示

<code src="./demos/demo.tsx" title="Awareness.Cursor" description="协同角色的指针"></code>

<!-- <code src="./demos/Avatar.tsx" title="Awareness.Avatar" description="协同用户"></code> -->

## API

### Awareness.Cursor

光标属性

| 属性     | 类型                       | 描述     |
| -------- | -------------------------- | -------- |
| position | `{ x: number; y: number }` | 光标位置 |
| color    | `string`                   | 光标颜色 |
| name     | `string`                   | 光标名称 |

### Awareness.Avatar

头像组件的属性

| 属性名    | 类型         | 描述                               |
| --------- | ------------ | ---------------------------------- |
| name      | `string`     | 用户名                             |
| color     | `string`     | 颜色                               |
| active    | `boolean`    | 是否激活状态，默认为 `false`       |
| current   | `boolean`    | 是否当前用户，默认为 `false`       |
| following | `boolean`    | 是否关注了当前用户，默认为 `false` |
| onClick   | `() => void` | 点击事件回调函数                   |
