const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildEntryPoint = entryPoint => {
  return [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    entryPoint
  ];
};

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: 'common.js'
  }),
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('app.css'),
];

module.exports = {
  entry: {
    app: buildEntryPoint('./src')
  },
  output: {
    path: path.join(__dirname, 'dev'),
    publicPath: '/',
    filename: '[name].js'
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
      }
    ]
  },
  resolve: {
    root: [ path.resolve(__dirname, 'src') ],
    extensions: ['', '.js', '.jsx'],
  },
  plugins: plugins,
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dev'),
    hot: true,
    inline: true,
    stats: {
      assets: true,
      colors: true,
      version: false,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false
    },
    port: 3000
  },
  devtool: 'source-map'
};
