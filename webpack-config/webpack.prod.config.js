const CommonConfig = require('./webpack.common.config');
const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(CommonConfig, {
  mode: 'production',
  stats: 'errors-only',
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
        }, 'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            // All postcss options is now under `postcssOptions`
            postcssOptions: {
              config: path.resolve(__dirname, '../postcss-config/postcss.prod.config.js'),
            },
          },
        },
          'sass-loader']
      },
    ]
  }
});