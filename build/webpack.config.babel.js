const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {app: [path.resolve(__dirname, '../src/index.js')]},
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, '../dist'),
    filename: '[chunkhash].bundle.js',
    chunkFilename: '[chunkhash].chunk.js'
  },
  devServer: {
    open: 'Google Chrome',
    port: 3000,
    disableHostCheck: true,
    https: true,
    public: 'https://weather-app.org:3000',
    historyApiFallback: true,
    stats: {colors: true}
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true
    }
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: false}
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!(pako|query-string|split-on-first|strict-uri-encode)\/).*/,
        use: {
          loader: 'babel-loader',
          options: require('./babel')
        }
      },
      {
        test: /(\.scss|\.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
              minimize: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'src/assets', to: 'assets', noErrorOnMissing: true}
      ]
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../src/index.html'),
      minify: {
        collapseWhitespace: false,
        removeComments: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: false,
        minifyCSS: false,
        minifyURLs: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css'
    })
  ]
};
