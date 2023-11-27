---
nav: 快速上手
order: 90
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

引入 FlowView 组件，即可在页面上获得一块带有小地图能力的的画布。

```js
import { ProFlow } from '@ant-design/pro-flow';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <ProFlow nodes={[]} edges={[]} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 800px;
  height: 500px;
  padding: 20px;
  background-color: aqua;
`;
```

<code src='./demos/emptyFLow.tsx' ></code>

:::warning
注意：组件必须包裹在具有宽度和高度的元素中。
:::

## 添加节点和边缘数据

现在我们加入一些 nodes 和 edges 的数据。ProFlow 会提供`计算坐标`和`自动布局`的能力

```js
const nodes = [
  {
    id: 'a1',
    data: {
      title: 'XXX_API_b3',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a2',
    data: {
      title: 'XXX_API_b4',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a3',
    data: {
      title: 'XXX_API_b4',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      describe: 'XXX_XXX_XXX_API',
    },
  },
];
const edges = [
  {
    id: 'a1-a2',
    source: 'a1',
    target: 'a2',
  },
  {
    id: 'a1-a3',
    source: 'a1',
    target: 'a3',
    type: EdgeType.radius,
  },
];
```

<code src='./demos/baseDataFlow.tsx' ></code>

## 添加交互性

我们需要一些方法来监听用户与画布的交互，比如选中节点、选中边缘以及取消选中。

- onNodeClick
- onEdgeClick
- onPaneClick

可以通过给 node 或 edge 变更不同的 type 来快速实现主要选中，次要选中，以及不同程度的选中。

<code src='./demos/selectFlow.tsx' ></code>
