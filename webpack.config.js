var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
/*
 *COMMAND JS的导出语法
 */
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: './index.js'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            // {
            //   test: /\.(png|jpg|gif)$/,
            //   loaders: ["url-loader?limit=100000&name=images/[hash:12].[ext]"],
            //   exclude: "/node_module/"
            // },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader?name=images/[hash:6].[ext]'],
                exclude: "/node_module/"
            }, {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    devServer: {
        port: 8080,
        contentBase: "./build", //本地服务器所加载的页面所在的目录
        //  colors: true,//终端中输出结果为彩色
        historyApiFallback: true, //不跳转，用于开发单页面应用，依赖于HTML5 history API 设置为true点击链接还是指向index.html
    },
    plugins: [// new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin("styles.css")]
}
