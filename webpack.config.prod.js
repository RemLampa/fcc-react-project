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
  entry: {
    'app': './src'
  },
  output: {
    path: path.join(__dirname, './public/assets'),
    publicPath: project.repoName + '/assets/',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: "file"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap!sass?sourceMap'
        )
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?sourceMap'
        ]
      }
    ]
  },
  resolve: {
    root: [ path.resolve(__dirname, 'src') ],
    extensions: ['', '.js', '.jsx'],
  },
  plugins: plugins,
  devtool: 'cheap-module-source-map'
};
