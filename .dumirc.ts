import { defineConfig } from 'dumi';
import { homepage } from './package.json';

const isProd = process.env.NODE_ENV === 'production';

// 不是预览模式 同时是生产环境
const isProdSite = process.env.PREVIEW !== '1' && isProd;

export default defineConfig({
  // 部署在非根目录时, base 和 publicPath 都需要配置
  base: isProdSite ? '/kitchen-flow-editor/' : '/',
  publicPath: isProdSite ? '/kitchen-flow-editor/' : '/',
  outputPath: 'docs-dist',
  favicons: ['https://gw.alipayobjects.com/zos/bmw-prod/51a51720-8a30-4430-b6c9-be5712364f04.svg'],
  themeConfig: {
    name: 'Kitchen Flow Editor',
    logo: 'https://gw.alipayobjects.com/zos/bmw-prod/af1ea898-bf02-45d1-9f30-8ca851c70a5b.svg',
    socialLinks: {
      github: homepage,
    },
    footer: 'Made with ❤️ by 蚂蚁集团 - AFX & 数字科技',
  },
});
