var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var pageObj = [
    {
        title: '首页',
        filename: "index.html",
        template: './app/entry/index/index.html',
        chunks: ["handlebars","jquery","index"]
    },
    {
        title: '创建问卷页',
        filename: "creat.html",
        template: './app/entry/creat/index.html',
        chunks:["handlebars","jquery","index"]
    },
    {
        title: '问卷列表页',
        filename: "list.html",
        template: './app/entry/list/index.html',
        chunks:["handlebars","jquery","index"]
    },
    {
        title: '用户中心页',
        filename: "user.html",
        template: './app/entry/user/index.html',
        chunks:["handlebars","jquery","index"]
    },
    {
        title: '答题页',
        filename: "answer.html",
        template: './app/entry/answer/index.html',
        chunks:["handlebars","jquery","index"]
    },
    {
        title: '结果页',
        filename: "result.html",
        template: './app/entry/result/index.html',
        chunks:["handlebars","jquery","index"]
    }
]
var pluginArr = []
pluginArr.push(new OpenBrowserPlugin({ url: 'http://localhost:8080' }))
pageObj.map((item) => {
    let option = Object.assign({
        inject: true,
        showErrors: true,
    },item)
   pluginArr.push(new htmlWebpackPlugin(option))
})
pluginArr.push(new ExtractTextPlugin({
    filename: 'main.css',
    disable: process.env.NODE_ENV === "development"
}));
pluginArr.push(
    new webpack.optimize.CommonsChunkPlugin({
        name: 'jquery',
        filename: 'jquery.js',
        chunks: 'jquery'
    })
)
pluginArr.push(
     new webpack.optimize.CommonsChunkPlugin({
        name: 'handlebars',
        filename: 'handlebars.js',
        chunks: 'handlebars'
    })
)
pluginArr.push(
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        "window.jQuery": "jquery"
    })
)

module.exports = pluginArr;

