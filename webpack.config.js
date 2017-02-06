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
  context: path.resolve(__dirname, './'),
  entry: {
    app: buildEntryPoint('./src')
  },
  output: {
    path: path.join(__dirname, 'dev'),
    publicPath: '/',
    filename: '[name].js'
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
        use: 'file-loader'
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
    extensions: ['.js', '.jsx']
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
