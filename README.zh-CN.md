<div align="center">

<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/wzToJwlSw%24/logo.svg">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*j10nRoiMh0MAAAAAAAAAAAAADvl6AQ/original">

<h1>ProFlow</h1>

基于 React-Flow 的流程编辑器框架

[![][npm-release-shield]][npm-release-link] [![][npm-downloads-shield]][npm-downloads-link] [![][github-releasedate-shield]][github-releasedate-link] [![][github-action-test-shield]][github-action-test-link] [![][github-action-release-shield]][github-action-release-link] [![][codecov-shield]][codecov-link] <br/> [![][github-contributors-shield]][github-contributors-link] [![][github-forks-shield]][github-forks-link] [![][github-stars-shield]][github-stars-link] [![][github-issues-shield]][github-issues-link] [![][github-license-shield]][github-license-link] <br/> [![][ant-design-shield]][ant-design-link] [![][devops-dumi-shield]][devops-dumi-link] [![][devops-father-shield]][devops-father-link]

[English](./README.md)・简体中文・[Changelog](./CHANGELOG.md) . [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

![](https://gw.alipayobjects.com/zos/kitchen/XkL0M58aSZ/pro-flow.webp)

</div>

<details>
<summary><kbd>目录</kbd></summary>

#### 目录

- [📦 安装](#-安装)
  - [使用 Next.js 编译](#使用-nextjs-编译)
- [✨ 特性](#-特性)
- [🔨 使用](#-使用)
  - [添加数据](#添加数据)
  - [添加交互](#添加交互)
- [🖥 浏览器兼容性](#-浏览器兼容性)
- [⌨️ 本地开发](#️-本地开发)
- [🤝 贡献](#-贡献)
- [🛣️ 生态系统](#️-生态系统)

####

</details>

## 📦 安装

> \[!IMPORTANT]
>
> 此包仅支持 [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)。

要安装 `@ant-design/pro-flow`，请运行以下命令：

```bash
$ pnpm install @ant-design/pro-flow
```

### 使用 Next.js 编译

> \[!NOTE]
>
> 为了正确使用 Next.js SSR，请在 `next.config.js` 中添加 `transpilePackages: ['@ant-design/pro-flow']`。例如：

```js
const nextConfig = {
  transpilePackages: ['@ant-design/pro-flow'],
};
```

<br/>

## ✨ 特性

> \[!TIP]
>
> ProFlow 专注于快速设置流程节点编辑器框架。它旨在赋予开发人员轻松创建丰富、动态和直观的流程编辑器界面的能力。

[![](https://next.ossinsight.io/widgets/official/compose-activity-trends/thumbnail.png?repo_id=644220380&image_size=auto&color_scheme=dark)](https://next.ossinsight.io/widgets/official/compose-activity-trends?repo_id=644220380)

**ProFlow 是一款基于 react-flow 构建的画布编辑器。具有的特性如下：**

- 💠 **现代化节点设计**：拥有现代化设计的默认节点与成组节点组件，使界面更加直观、易读、易用。
- 🌐 **开箱即用的组件**：支持 MiniMap、Inspector、Loading 等组件，提供丰富的扩展能力和定制化选项，让用户能够轻松定制画布界面。
- 🎨 **自动布局算法**：内置了 dagre 布局算法，使得用户只需给出节点和关系，即可获得自动布局后的效果，轻松实现流程图的美观展现。
- 🖱️ **流程图数据操作**：提供了 useFlowViewer 功能，让用户可以轻松操作和管理画布相关数据，实现个性化的交互体验。
- 🧩 **自定义节点和边缘**：支持自定义节点、自定义边缘能力，并提供了额外的 label、zoom、selectType 等属性，满足个性化定制需求。
- 📱 **移动端友好**：默认提供了 figma 模式的触摸板交互画布逻辑，适配移动端操作，使用户体验更加流畅。
- 🎨 **画布编辑器能力**：提供开箱即用的画布编辑器能力，内置丰富的画布、节点操作功能，包括复制粘贴、撤销重做等功能，提升用户的操作效率和便利性。

<br/>

## 🔨 使用

```jsx
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

### 添加交互

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

<br/>

## 🖥 浏览器兼容性

> \[!NOTE]
>
> - 现代浏览器和 Internet Explorer 11（需要[polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11)）
> - [Electron](https://www.electronjs.org/)

| [![edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![electron_48x48](https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png)](http://godban.github.io/browsers-support-badges/) |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                              | 最近 2 个版本                                                                                                                                           | 最近 2 个版本                                                                                                                                           | 最近 2 个版本                                                                                                                                           | 最近 2 个版本                                                                                                                                                       |

<br/>

## ⌨️ 本地开发

您可以使用 Github Codespaces 进行在线开发：

[![][github-codespace-shield]][github-codespace-link]

或者克隆它进行本地开发：

```bash
$ git clone https://github.com/ant-design/pro-flow.git
$ cd pro-flow
$ pnpm install
$ pnpm dev
```

<br/>

## 🤝 贡献

> \[!IMPORTANT]
>
> 加入我们的协作生态系统。您的贡献是我们项目的心脏。以下是您如何成为我们充满活力的社区的重要组成部分：

- **整合和创新**：将 Ant Design Pro、umi 和 ProFlow 整合到您的项目中。您的实际使用和反馈对我们至关重要。
- **发表您的见解**：遇到了问题？有疑问？您的观点很重要。通过提交[问题][github-issues-link]来分享它们，帮助我们提升用户体验。
- **塑造未来**：有代码增强或功能想法吗？我们邀请您提出[拉取请求][pr-welcome-link]，直接为我们的代码库发展做出贡献。

每一次贡献，无论大小，都值得庆祝。加入我们，共同致力于完善和提升开源企业 UI 组件的世界。 😃

[![][pr-welcome-shield]][pr-welcome-link]

<a href="https://github.com/ant-design/pro-flow/graphs/contributors" target="_blank">
  <table>
    <tr>
      <th colspan="2">
        <br><img src="https://contrib.rocks/image?repo=ant-design/pro-flow"><br><br>
      </th>
    </tr>
    <tr>
      <td>
        <img src="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=active&period=past_28_days&owner_id=12101536&repo_ids=644220380&image_size=2x3&color_scheme=dark">
      </td>
      <td rowspan="2">
        <img src="https://next.ossinsight.io/widgets/official/compose-org-participants-growth/thumbnail.png?activity=active&period=past_28_days&owner_id=12101536&repo_ids=644220380&image_size=4x7&color_scheme=dark">
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=new&period=past_28_days&owner_id=12101536&repo_ids=644220380&image_size=2x3&color_scheme=dark">
      </td>
    </tr>
  </table>
</a>

<br/>

## 🛣️ 生态系统

- **[ProComponents](https://github.com/ant-design/pro-components)** - 专为企业级应用设计，像专业人士一样使用 Ant Design！
- **[ProEditor](https://github.com/ant-design/pro-editor)** - 终极编辑器 UI 框架和组件。
- **[ProFlow](https://github.com/ant-design/pro-flow)** - 基于 React-Flow 的流程编辑器框架。
- **[ProChat](https://github.com/ant-design/pro-chat)** - 用于快速构建 LLM 聊天界面的组件库。

<br/>

---

#### 📝 License

Copyright © 2023 - present [AFX][ant-design-link] & [Ant Digital](https://antdigital.com). <br/> This project is [MIT](./LICENSE) licensed.

<!-- 链接组 -->

[ant-design-link]: https://ant.design
[ant-design-shield]: https://img.shields.io/badge/-Ant%20Design-1677FF?labelColor=black&logo=antdesign&style=flat-square
[codecov-link]: https://codecov.io/gh/ant-design/pro-flow
[codecov-shield]: https://img.shields.io/codecov/c/github/ant-design/pro-flow?color=1677FF&labelColor=black&style=flat-square&logo=codecov&logoColor=white
[devops-dumi-link]: https://d.umijs.org/
[devops-dumi-shield]: https://img.shields.io/badge/docs%20by-dumi-blue?color=1677FF&labelColor=black&style=flat-square
[devops-father-link]: https://github.com/umijs/father
[devops-father-shield]: https://img.shields.io/badge/build%20with-father-028fe4.svg?color=1677FF&labelColor=black&style=flat-square
[github-action-release-link]: https://github.com/ant-design/pro-flow/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/ant-design/pro-flow/release.yml?color=1677FF&label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/ant-design/pro-flow/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/ant-design/pro-flow/test.yml?color=1677FF&label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-codespace-link]: https://codespaces.new/ant-design/pro-flow
[github-codespace-shield]: https://github.com/codespaces/badge.svg
[github-contributors-link]: https://github.com/ant-design/pro-flow/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/ant-design/pro-flow?color=1677FF&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/ant-design/pro-flow/network/members
[github-forks-shield]: https://img.shields.io/github/forks/ant-design/pro-flow?color=1677FF&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/ant-design/pro-flow/issues
[github-issues-shield]: https://img.shields.io/github/issues/ant-design/pro-flow?color=1677FF&labelColor=black&style=flat-square
[github-license-link]: https://github.com/ant-design/pro-flow/blob/master/LICENSE
[github-license-shield]: https://img.shields.io/github/license/ant-design/pro-flow?color=1677FF&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/ant-design/pro-flow/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/ant-design/pro-flow?color=1677FF&labelColor=black&style=flat-square
[github-stars-link]: https://github.com/ant-design/pro-flow/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/ant-design/pro-flow?color=1677FF&labelColor=black&style=flat-square
[npm-downloads-link]: https://www.npmjs.com/package/@ant-design/pro-flow
[npm-downloads-shield]: https://img.shields.io/npm/dt/@ant-design/pro-flow?labelColor=black&style=flat-square&color=1677FF
[npm-release-link]: https://www.npmjs.com/package/@ant-design/pro-flow
[npm-release-shield]: https://img.shields.io/npm/v/@ant-design/pro-flow?color=1677FF&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/ant-design/pro-flow/pulls
[pr-welcome-shield]: https://img.shields.io/badge/%E2%9D%A4%EF%B8%8F%20PR%20WELCOME-%E2%86%92-1677FF?labelColor=black&style=for-the-badge
