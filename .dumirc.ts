import { defineConfig } from 'dumi';
import { homepage } from './package.json';

const isProd = process.env.NODE_ENV === 'production';

// 不是预览模式 同时是生产环境
const isProdSite = process.env.PREVIEW !== '1' && isProd;

export default defineConfig({
  // 部署在非根目录时, base 和 publicPath 都需要配置
  base: isProdSite ? '/pro-flow/' : '/',
  publicPath: isProdSite ? '/pro-flow/' : '/',
  outputPath: 'docs-dist',
  favicons: ['https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg'],
  themeConfig: {
    name: 'Pro Flow',
    logo: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    socialLinks: {
      github: homepage,
    },
    footer: 'Made with ❤️ by 蚂蚁集团 - AFX & 数字科技',
  },
});
