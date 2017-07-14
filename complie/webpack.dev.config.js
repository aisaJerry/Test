var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // html inject
var node_modules = path.resolve(__dirname, '../node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var InlineManifestWebpackPlugin = require('inline-manifest2-webpack-plugin');

var chunkSorts = ["manifest", "vendor", "app"];

module.exports = {
  entry: {
    vendors:['vue','vue-router'], //抽离公用文件 step1
    app: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: '[name].[hash:10].js', // 多个入口文件时，需要用变量
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash:5].js'
  },
  module: {
    rules: [ // loader默认不会把node_modules包含进来, 写了include,就需要包含本项目的src
        { 
          test: /\.js$/, 
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
              fallback: 'style-loader', 
              use: ['css-loader']
          })
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
              fallback: 'style-loader', 
              use: ['css-loader', 'postcss-loader', 'sass-loader']
          })
        },
        { // 如果要包含外部包， 需要写include:spec_moudle,  spec_moudle从node_moudle中过滤出来
          test: /\.vue$/, 
          loader: "vue-loader",
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: 'css-loader'
              }),
              sass: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'postcss-loader', 'sass-loader']
              }),
              scss: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'postcss-loader', 'sass-loader']
              })

            }
          } 
        }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
        filename: 'index.html',
      }),
      new webpack.optimize.CommonsChunkPlugin({ //抽离公用JS文件 step2 需和step1配合
          names: [ "vendors"]
      }),
      // 抽离css
      new ExtractTextPlugin('[name].[contenthash:10].css'),
      new webpack.LoaderOptionsPlugin({
        options:{
          postcss: [autoprefixer({browsers: ['last 20 versions']})]
        }
      })
  ],
  devServer: {
      contentBase: "./src",
      disableHostCheck: true
  },
  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.min.js'
      }
    }
};