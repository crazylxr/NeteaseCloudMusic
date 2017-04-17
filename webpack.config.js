var path = require("path");

/*
 *COMMAND JS的导出语法
 */
module.exports = {
  entry: {app: './index.js'},
  output: {
   filename: 'bundle.js',
   path: __dirname + '/dist'
 }
}
