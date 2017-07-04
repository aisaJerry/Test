var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // html inject
var node_modules = path.resolve(__dirname, '../node_modules');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [ // loader默认不会把node_modules包含进来
        { test: /\.js|jsx$/, include: node_modules, loader: "babel-loader" },
        { test: /\.vue$/, loader: "vue-loader" } // 如果要包含外部包， 需要写include:spec_moudle,  spec_moudle从node_moudle中过滤出来
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html'
      })
  ],
  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.min.js'
      }
    }
};