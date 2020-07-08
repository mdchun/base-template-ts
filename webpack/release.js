// const webpack = require('webpack')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = {
  mode: 'production',

  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
    library: 'Test',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../.package'),
    filename: 'bundle.min.js',
    umdNamedDefine: true
  },

  resolve: {
    // 后缀列表
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          "ts-loader"
        ]
      }
    ]
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'BundleSizeRelease.html',
      logLevel: 'info'
    })
  ]
}

module.exports = config