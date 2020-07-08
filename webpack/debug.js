const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = {
  mode: 'development',

  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
    library: 'Test',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../.package'),
    filename: 'bundle.js',
    umdNamedDefine: true
  },

  resolve: {
    // 后缀列表
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          "ts-loader"
        ]
      },
      {
        test: /\.js$/,
        use: [
          "babel-loader"
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "BundleSizeDebug.html",
      logLevel: 'info'
    })
  ]
}

module.exports = config