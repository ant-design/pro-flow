---
nav: 使用文档
group:
  title: 快速上手
  order: 2
title: 安装使用
order: 1
description:
---

## 快速入门

如果您想尽快启动并运行，那么您来对地方了！ 此页面将在几分钟内带您从零到一创建一个有效的 ProFlow 应用程序。如果您想深入的了解 ProFlow 的全部内容，请查看示例，或深入了解 API 文档。

## 安装

若要在本地开始，应具备以下几点：

- [Nodejs](https://nodejs.org/en) 安装
- npm 或其他包管理工具，比如 [yarn](https://yarnpkg.com/) 或 [pnpm](https://pnpm.io/)
- 以及 [React]（https://reactjs.org/）的基础知识

首先启动一个 React 应用，推荐使用 [vite](https://vitejs.dev/), 但选择权在你手中。

```bash
pnpm create vite@latest my-pro-flow-app --template react
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
