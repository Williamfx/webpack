const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
    // const { dirname } = require('path')
const htmlPlugin = new HtmlPlugin({
        template: './src/index.html',
        filename: './index.html'
    })
    // 使用node.js 中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    // 代表 webpack 运行的模式，可选值有两个 development 和 production
    mode: 'development',
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        open: true,
        port: 80,
        host: '127.0.0.1'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.jpg|png|gif$/, use: ['url-loader?limit=22229&outputPath=images'] },
            { test: /\.js$/, use: 'babel-loader', exclude: /nodel_modules/ }
        ]
    },
    // resolve: {
    //     alias: {
    //         '@': path.join(__dirname, './src')
    //     }
    // }
}