---
nav:
  title: 快速上手
  order: 10
group:
  title: 快速上手
  order: 2
title: 安装使用
order: 1
description:
---

# 安装使用

## 创建项目 & 安装

若要在本地开始，应具备以下几点：

- [Nodejs](https://nodejs.org/en) 安装
- npm 或其他包管理工具，比如 [yarn](https://yarnpkg.com/) 或 [pnpm](https://pnpm.io/)
- 以及 [React](https://reactjs.org/) 的基础知识

首先启动一个 React 应用，推荐使用 [umi](https://umijs.org/docs/guides/getting-started)。

```bash
$ mkdir myapp && cd myapp

$ pnpm dlx create-umi@latest
```

ProFlow 在 npm 上发布为 [@ant-design/pro-flow](https://www.npmjs.com/package/@ant-design/pro-flow) ，推荐使用 pnpm 安装。

```bash
pnpm i @ant-design/pro-flow -S
```

最后 React 服务，就可以开始了。

```bash
pnpm run dev
```

## 创建第一个 ProFlow

引入 FlowView 组件，即可在页面上获得一块带有小地图能力的的画布。

<code src='./demos/quickUse/baseFlow.tsx'></code>

:::warning
注意：组件必须包裹在具有宽度和高度的元素中。
:::
