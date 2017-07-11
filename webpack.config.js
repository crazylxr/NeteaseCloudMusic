var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry : path.resolve(__dirname, './app/index.js'),
  output: {
        path: __dirname + "./build",
        filename: "bundle.js",
        publicPath:'/'
    },
  module : {
    rules : [
      {test: /\.(js|jsx)$/, exclude: /node_modules/,use : ['babel-loader']},
      {test: /\.(png|gif|jpg|jpeg|bmp|svg|ico)$/i,loader: 'url-loader?limit=10000'}, // 限制大小10kb
      // {test: /\.(png|gif|jpg|jpeg|bmp|svg)$/i,loader: 'file-loader?name=[name].png'}, // 限制大小10kb
      {test: /\.css$/, use: [ 'style-loader', 'css-loader?modules' ]},
      {test: /\.less$/,use: ['style-loader',{ loader: 'css-loader', options: { importLoaders: 1 } },'less-loader']}
    ]
  },
  resolve: {
      modules: [path.resolve(__dirname, 'node_modules'), path.join(__dirname, 'src')],
      extensions: ['.web.js', '.jsx', '.js', '.json'],
    },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true,
    port: 9000,
    hot:true,
    historyApiFallback: true,
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
  ]
}
