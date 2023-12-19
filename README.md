<p align="center">
  <img width="160" src="https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*j10nRoiMh0MAAAAAAAAAAAAADvl6AQ/original">
</p>
<h1 align="center">Pro Flow</h1>

<div align="center">

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url] [![install size][npm-size]][npm-size-url]

[![Test CI status][test-ci]][test-ci-url] [![Deploy CI][release-ci]][release-ci-url] [![Coverage][coverage]][codecov-url]

[![contributors][contributors-shield]][contributors-url] [![forks][forks-shield]][forks-url] [![stargazers][stargazers-shield]][stargazers-url] [![issues][issues-shield]][issues-url]

[![ docs by dumi][dumi-url]](https://d.umijs.org/) [![Build With father][father-url]](https://github.com/umijs/father/)

<!-- gitpod url -->

[gitpod-badge]: https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod
[gitpod-url]: https://gitpod.io/#https://github.com/ant-design/pro-flow

<!-- umi url -->

[dumi-url]: https://img.shields.io/badge/docs%20by-dumi-blue
[father-url]: https://img.shields.io/badge/build%20with-father-028fe4.svg

<!-- npm url -->

[npm-image]: http://img.shields.io/npm/v/@ant-design/pro-flow.svg?style=flat-square&color=deepgreen&label=latest
[npm-url]: http://npmjs.org/package/@ant-design/pro-flow
[npm-size]: https://img.shields.io/bundlephobia/minzip/@ant-design/pro-flow?color=deepgreen&label=gizpped%20size&style=flat-square
[npm-size-url]: https://packagephobia.com/result?p=@ant-design/pro-flow

<!-- coverage -->

[coverage]: https://codecov.io/gh/ant-design/pro-flow/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/ant-design/pro-flow/branch/master

<!-- Github CI -->

[test-ci]: https://github.com/ant-design/pro-flow/workflows/Test%20CI/badge.svg
[release-ci]: https://github.com/ant-design/pro-flow/workflows/Release%20CI/badge.svg
[test-ci-url]: https://github.com/ant-design/pro-flow/actions?query=workflow%3ATest%20CI
[release-ci-url]: https://github.com/ant-design/pro-flow/actions?query=workflow%3ARelease%20CI
[download-image]: https://img.shields.io/npm/dm/@ant-design/pro-flow.svg?style=flat-square
[download-url]: https://npmjs.org/package/@ant-design/pro-flow

</div>

## 简介

Pro Flow 是一款基于 react-flow 构建的画布编辑器。具有的特性如下：

1. 💠 **现代化节点设计**：拥有现代化设计的默认节点与成组节点组件，使界面更加直观、易读、易用。

2. 🌐 **开箱即用的组件**：支持 MiniMap、Inspector、Loading 等组件，提供丰富的扩展能力和定制化选项，让用户能够轻松定制画布界面。

3. 🎨 **自动布局算法**：内置了 dagre 布局算法，使得用户只需给出节点和关系，即可获得自动布局后的效果，轻松实现流程图的美观展现。

4. 🖱️ **流程图数据操作**：提供了 useFlowViewer 功能，让用户可以轻松操作和管理画布相关数据，实现个性化的交互体验。

5. 🧩 **自定义节点和边缘**：支持自定义节点、自定义边缘能力，并提供了额外的 label、zoom、selectType 等属性，满足个性化定制需求。

6. 📱 **移动端友好**：默认提供了 figma 模式的触摸板交互画布逻辑，适配移动端操作，使用户体验更加流畅。

7. 🎨 **画布编辑器能力**：提供开箱即用的画布编辑器能力，内置丰富的画布、节点操作功能，包括复制粘贴、撤销重做等功能，提升用户的操作效率和便利性。

## 快速上手

### 安装

推荐使用 `pnpm` 安装

```bash
pnpm i @ant-design/pro-flow -S
```

### 使用

```js
import { FlowView } from '@ant-design/pro-flow';
import useStyles from './css/index.style';

function App() {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={[]} edges={[]} />
    </div>
  );
}

export default App;
```

### 添加数据

```js
export const nodes = [
  {
    id: 'a1',
    data: {
      title: 'XXX_API_a1',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a2',
    data: {
      title: 'XXX_API_a2',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
    },
  },
  {
    id: 'a3',
    data: {
      title: 'XXX_API_a3',
      logo: 'https://mdn.alipayobjects.com/huamei_ntgeqc/afts/img/A*kgyiRKi04eUAAAAAAAAAAAAADvuvAQ/original',
      description: 'XXX_XXX_XXX_API',
    },
  },
];
export const edges = [
  {
    id: 'a1-a2',
    source: 'a1',
    target: 'a2',
  },
  {
    id: 'a1-a3',
    source: 'a1',
    target: 'a3',
    type: 'radius',
  },
];
```

### 添加交互性

```js
import { FlowView } from '@ant-design/pro-flow';
import useStyles from './css/index.style';
import { edges, nodes } from './data';

function App() {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <FlowView nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;
```

## 更新日志

详情：[CHANGELOG](./CHANGELOG.md)

## 🤝 Contributing

<!-- CONTRIBUTION GROUP -->

> 📊 Total: <kbd>**6**</kbd>

<a href="https://github.com/arvinxx" title="arvinxx">
  <img src="https://avatars.githubusercontent.com/u/28616219?v=4" width="50" />
</a>
<a href="https://github.com/ModestFun" title="ModestFun">
  <img src="https://avatars.githubusercontent.com/u/61576426?v=4" width="50" />
</a>
<a href="https://github.com/actions-user" title="actions-user">
  <img src="https://avatars.githubusercontent.com/u/65916846?v=4" width="50" />
</a>
<a href="https://github.com/chenshuai2144" title="chenshuai2144">
  <img src="https://avatars.githubusercontent.com/u/8186664?v=4" width="50" />
</a>
<a href="https://github.com/meganjohnson96" title="meganjohnson96">
  <img src="https://avatars.githubusercontent.com/u/136729222?v=4" width="50" />
</a>
<a href="https://github.com/KazooTTT" title="KazooTTT">
  <img src="https://avatars.githubusercontent.com/u/31075337?v=4" width="50" />
</a>

<!-- CONTRIBUTION END -->

<div align="right">

[![][back-to-top]](#readme-top)

## </div>

#### 📝 License

Copyright © 2020 - present [Arvin Xu][profile-url]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[profile-url]: https://github.com/arvinxx

<!-- SHIELD LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square

<!-- contributors -->

[contributors-shield]: https://img.shields.io/github/contributors/ant-design/pro-flow.svg?style=flat
[contributors-url]: https://github.com/ant-design/pro-flow/graphs/contributors

<!-- forks -->

[forks-shield]: https://img.shields.io/github/forks/ant-design/pro-flow.svg?style=flat
[forks-url]: https://github.com/ant-design/pro-flow/network/members

<!-- stargazers -->

[stargazers-shield]: https://img.shields.io/github/stars/ant-design/pro-flow.svg?style=flat
[stargazers-url]: https://github.com/ant-design/pro-flow/stargazers

<!-- issues -->

[issues-shield]: https://img.shields.io/github/issues/ant-design/pro-flow.svg?style=flat
[issues-url]: https://github.com/ant-design/pro-flow/issues/new/choose
