var path = require("path");

/*
 *COMMAND JS的导出语法
 */
module.exports = {
  entry: {app: './index.js'},
  output: {
   filename: 'bundle.js',
   path: __dirname + '/build'
 },
 devServer: {
   port:8080,
   contentBase: "./build",//本地服务器所加载的页面所在的目录
  //  colors: true,//终端中输出结果为彩色
   historyApiFallback:true,//不跳转，用于开发单页面应用，依赖于HTML5 history API 设置为true点击链接还是指向index.html
 }
}
