const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
  pluginOptions: {
    svgSprite: {
      dir: './src/assets/icons',
      test: /\.svg$/,
      loaderOptions: {
        extract: false
      }
    },
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, '@/scss/index.scss')]
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('svg-sprite')
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader');
  },
});
