var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // html inject
var node_modules = path.resolve(__dirname, '../node_modules');

module.exports = {
  entry: {
    vendors:['vue','vue-router'], //抽离公用文件 step1
    app:'./src/index.js'
  },
  output: {
    filename: '[name].[hash:10].js', // 多个入口文件时，需要用变量
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash:5].js'
  },
  module: {
    loaders: [ // loader默认不会把node_modules包含进来, 写了include,就需要包含本项目的src
        { test: /\.js$/, include: [ node_modules, path.resolve(__dirname, './src') ], loader: "babel-loader" },
        { test: /\.vue$/, loader: "vue-loader" } // 如果要包含外部包， 需要写include:spec_moudle,  spec_moudle从node_moudle中过滤出来
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html'
      }),
      new webpack.optimize.CommonsChunkPlugin({ //抽离公用文件 step2 需和step1配合
          names: [ "vendors"]
      }),
  ],
  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.min.js'
      }
    }
};