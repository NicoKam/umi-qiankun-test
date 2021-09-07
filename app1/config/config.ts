import { defineConfig } from 'umi';
import theme from './theme';

export default defineConfig({
  base: '/app1',
  locale: {
    default: 'zh-CN',
    antd: true,
  },
  ignoreMomentLocale: true,
  theme,
  proxy: {
    '/api': {
      target: 'http://server-ip:8080/',
      changeOrigin: true,
      // 'pathRewrite': { '^/api' : '' },
    },
  },
  chainWebpack(memo) {
    // 修改less-loader的css-modules的配置，添加文件名作为前缀
    memo.module
      .rule('less')
      .oneOf('css-modules')
      .use('css-loader')
      .options({
        modules: {
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      });
  },
  qiankun: {
    slave: {},
  },
});
