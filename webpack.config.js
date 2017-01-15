const path = require('path');
const webpack = require('webpack');

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
  new webpack.HotModuleReplacementPlugin()
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
        test: /\.css$/,
        loader: 'style!css'
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
