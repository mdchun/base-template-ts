const path = require('path')

const config = {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js',
    publicPath: 'demo'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    inline: true,
    port: 9900,
    // open: true,
    openPage: './demo/index.html',
    // contentBase: path.join(__dirname, './')
  },

  plugins: [
  ]
}

module.exports = config
