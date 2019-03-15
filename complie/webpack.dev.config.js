var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // html inject
var node_modules = path.resolve(__dirname, '../node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var InlineManifestWebpackPlugin = require('inline-manifest2-webpack-plugin');
var remUnit = 37.5;

var chunkSorts = ["manifest", "vendor", "app"];

module.exports = {
  entry: {
    vendors:['vue','vue-router'], //抽离公用文件 step1
    app: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: '[name].[hash:10].js', // 多个入口文件时，需要用变量
    path: path.resolve(__dirname, '../dist'),
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
              use: ['css-loader', 'postcss-loader', {
                loader: 'px2rem-loader',
                options: {
                  remUnit: remUnit,
                }
              }, 'sass-loader']
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
                  use: ['css-loader', 'postcss-loader', {
                    loader: 'px2rem-loader',
                    options: {
                      remUnit: remUnit,
                    }
                  }, 'sass-loader']
              })

            }
          } 
        }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.html'),
        filename: './index.html',
        excludeChunks: ['manifest']
      }),
      new webpack.optimize.CommonsChunkPlugin({ //抽离公用JS文件 step2 需和step1配合
          /*
          * manifest是一个js-moudle和js-moudle-id的对应关系
          * 如果不抽离出来，webpack会默认打在vendors.123.js或者app.123.js中
          * 这样的话，0.js一改，就会导致vendors.123.js或者app.123.js的md5值也会变化，会重新加载
          * 抽离出来，vendors.123.js或者app.123.js不改动不会变化，只会变化0.js和mainfest.js的md5值
          * mainfest.js较于vendor小多了
          */
          names: [ "vendors", "manifest"]
      }),
      /*
       * 将manifest打包成inline脚本，放到html里面，少了mainfest.js的请求
      * */
      new InlineManifestWebpackPlugin({
          name: 'webpackManifest',
          deleteFile: true
      }),
      // 抽离css
      new ExtractTextPlugin('[name].[contenthash:10].css'),
      new webpack.LoaderOptionsPlugin({
        options:{
          postcss: [autoprefixer({browsers: ['last 20 versions']})]
        }
      })
  ],
  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.min.js',
        'src': path.resolve(__dirname, '../src')
      }
    }
};