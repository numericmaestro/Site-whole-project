const path = require('path');
const CommonConfig = require('./webpack.common.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(CommonConfig, {
  mode: 'development',
  stats: 'normal',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    stats: 'errors-only',
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../src"),
    watchContentBase: true,
    open: true,
    compress: true,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'bundle[contenthash].css', }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: ''
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 1
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            // All postcss options is now under `postcssOptions`
            postcssOptions: {
              config: path.resolve(__dirname, '../postcss-config/postcss.dev.config.js'),
            },
            sourceMap: true
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      },
    ]
  }
});