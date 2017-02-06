const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const project = require('./project.config.json');

const plugins = [
  new CleanWebpackPlugin(['public']),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: 'js/common.js'
  }),
  new HtmlWebpackPlugin({
    title: project.title,
    filename: '../index.html',
    template: 'index_template.ejs',
    inject: true,
    hash: true
  }),
  new ExtractTextPlugin('css/app.css')
];

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: {
    'app': './src'
  },
  output: {
    path: path.join(__dirname, './public/assets'),
    publicPath: project.repoName + '/assets/',
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        use: "file-loader"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?sourceMap',
            'sass-loader?sourceMap'
          ]
        })
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?sourceMap'
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx'],
  },
  plugins: plugins,
  devtool: 'cheap-module-source-map'
};
