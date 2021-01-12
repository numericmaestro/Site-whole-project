const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV = process.env.NODE_ENV; //production or development

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      favicon: path.resolve(__dirname, '../src/public/icons/logo.svg'),
      minify: ENV == "production",
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: path.resolve(__dirname, '../src/public'), to: 'public' }
    //   ]
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          attributes: true,
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: [
          //     ['@babel/preset-env', { targets: "defaults" }]
          //   ]
          // }
        }
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ]
  }
};