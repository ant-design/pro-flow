<div align="center">

<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/wzToJwlSw%24/logo.svg">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://mdn.alipayobjects.com/huamei_d2ejos/afts/img/A*j10nRoiMh0MAAAAAAAAAAAAADvl6AQ/original">

<h1>ProFlow</h1>

A Flow Editor Framework base on React-Flow.

[![][npm-release-shield]][npm-release-link] [![][npm-downloads-shield]][npm-downloads-link] [![][github-releasedate-shield]][github-releasedate-link] [![][github-action-test-shield]][github-action-test-link] [![][github-action-release-shield]][github-action-release-link] [![][codecov-shield]][codecov-link] <br/> [![][github-contributors-shield]][github-contributors-link] [![][github-forks-shield]][github-forks-link] [![][github-stars-shield]][github-stars-link] [![][github-issues-shield]][github-issues-link] [![][github-license-shield]][github-license-link] <br/> [![][ant-design-shield]][ant-design-link] [![][devops-dumi-shield]][devops-dumi-link] [![][devops-father-shield]][devops-father-link]

English · [简体中文](./README.zh-CN.md) · [Changelog](./CHANGELOG.md) . [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

![](https://gw.alipayobjects.com/zos/kitchen/XkL0M58aSZ/pro-flow.webp)

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [📦 Installation](#-installation)
  - [Compile with Next.js](#compile-with-nextjs)
- [✨ Features](#-features)
- [🔨 Usage](#-usage)
  - [Add Data](#add-data)
  - [Add Interaction](#add-interaction)
- [🖥 Browser compatibility](#-browser-compatibility)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)
- [🛣️ Ecosystem](#️-ecosystem)

####

</details>

## 📦 Installation

> \[!IMPORTANT]
>
> This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

To install `@ant-design/pro-flow`, run the following command:

```bash
$ pnpm install @ant-design/pro-flow
```

### Compile with Next.js

> \[!NOTE]
>
> By work correct with Next.js SSR, add `transpilePackages: ['@ant-design/pro-flow']` to `next.config.js`. For example:

```js
const nextConfig = {
  transpilePackages: ['@ant-design/pro-flow'],
};
```

<br/>

## ✨ Features

> \[!NOTE]
>
> ProFlow focuses on quickly setting up a flow node-editor framework. It aims to empower developers to easily create rich, dynamic, and intuitive flow editor interfaces.

[![](https://next.ossinsight.io/widgets/official/compose-activity-trends/thumbnail.png?repo_id=644220380&image_size=auto&color_scheme=dark)](https://next.ossinsight.io/widgets/official/compose-activity-trends?repo_id=644220380)

**ProFlow is a canvas editor built on react-flow. It has the following features:**

- 💠 **Modern Node Design**: It features modern default nodes and grouped node components, making the interface more intuitive, readable, and user-friendly.
- 🌐 **Out-of-the-box Components**: It supports components such as MiniMap, Inspector, and Loading, providing rich extension capabilities and customization options, allowing users to easily customize the canvas interface.
- 🎨 **Automatic Layout Algorithm**: It comes with the dagre layout algorithm, allowing users to achieve automatic layout effects with just nodes and relationships, making it easy to achieve an aesthetically pleasing presentation of flowcharts.
- 🖱️ **Flowchart Data Manipulation**: It provides the useFlowViewer feature, allowing users to easily manipulate and manage canvas-related data, achieving a personalized interactive experience.
- 🧩 **Custom Nodes and Edges**: It supports the ability to customize nodes, custom edges, and provides additional attributes such as label, zoom, and selectType to meet personalized customization needs.
- 📱 **Mobile-Friendly**: It defaults to providing touchpad interactive canvas logic in figma mode, adapting to mobile operations for a smoother user experience.
- 🎨 **Canvas Editor Capabilities**: It provides out-of-the-box canvas editor capabilities, including rich canvas and node operation functions such as copy-paste, undo-redo, enhancing user operation efficiency and convenience.

<br/>

## 🔨 Usage

```jsx
import { FlowView } from '@ant-design/pro-flow';

function App() {
  const { styles } = useStyles();

  return (
    <div className={'container'}>
      <FlowView nodes={[]} edges={[]} />
    </div>
  );
}

export default App;
```

### Add Data

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

### Add Interaction

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

## 🖥 Browser compatibility

> \[!NOTE]
>
> - Modern browsers and Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))
> - [Electron](https://www.electronjs.org/)

| [![edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![electron_48x48](https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png)](http://godban.github.io/browsers-support-badges/) |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                              | last 2 versions                                                                                                                                         | last 2 versions                                                                                                                                         | last 2 versions                                                                                                                                         | last 2 versions                                                                                                                                                     |

<br/>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][github-codespace-shield]][github-codespace-link]

Or clone it for local development:

```bash
$ git clone https://github.com/ant-design/pro-flow.git
$ cd pro-flow
$ pnpm install
$ pnpm dev
```

<br/>

## 🤝 Contributing

> \[!IMPORTANT]
>
> Join our collaborative ecosystem. Your contributions are the heartbeat of our project. Here's how you can be an integral part of our vibrant community:

- **Integrate and Innovate**: Incorporate Ant Design Pro, umi, and ProFlow into your projects. Your real-world usage and feedback are invaluable to us.
- **Voice Your Insights**: Encounter a glitch? Have a query? Your perspectives matter. Share them by submitting [issues][github-issues-link] and help us enhance the user experience.
- **Shape the Future**: Have code enhancements or feature ideas? We invite you to propose [pull requests][pr-welcome-link] and contribute directly to the evolution of our codebase.

Every contribution, big or small, is celebrated. Join us in our mission to refine and elevate the world of open-source enterprise UI components. 😃

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

## 🛣️ Ecosystem

- **[ProComponents](https://github.com/ant-design/pro-components)** - Designed for Enterprise-Level Application, Use Ant Design like a Pro!.
- **[ProEditor](https://github.com/ant-design/pro-editor)** - The Ultimate Editor UI Framework and Components.
- **[ProFlow](https://github.com/ant-design/pro-flow)** - A Flow Editor Framework base on React-Flow.
- **[ProChat](https://github.com/ant-design/pro-chat)** - Components Library for Quickly Building LLM Chat Interfaces.

<br/>

---

#### 📝 License

Copyright © 2023 - present [AFX][ant-design-link] & [Ant Digital](https://antdigital.com). <br/> This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

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
