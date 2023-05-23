import { defineConfig } from 'dumi';
import { homepage } from './package.json';

export default defineConfig({
  themeConfig: {
    name: 'kitchen-flow-editor',
    github: homepage,
  },
});
