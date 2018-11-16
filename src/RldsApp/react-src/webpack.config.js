const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1
      })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    port: 7000,
    open: true,
    historyApiFallback: true,
    publicPath: '/'
  }
};