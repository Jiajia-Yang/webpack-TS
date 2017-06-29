var webpack = require('webpack');
var path = path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var allPlugin = require('./webpack.plugin.config');

allPlugin.push(new CleanWebpackPlugin(['build'], {
        root: '', // An absolute path for the root  of webpack.config.js
        verbose: true,// Write logs to console.
        dry: false // Do not delete anything, good for testing.
    })
)
module.exports = {
    entry: {
        index: './app/entry/index/index.js',
        answer: './app/entry/answer/index.js',
        creat: './app/entry/creat/index.js',
        result: './app/entry/result/index.js',
        user: './app/entry/user/index.js',
        list: './app/entry/list/index.js',
        vendor: ['handlebars',"jquery"]
    },
    output: {
        path: __dirname + '/build', 
        filename: '[name].js'
    },
    devServer: {
        historyApiFallback: true, // 不跳转
        hot: true,
        inline: true,
        port: 8080,
        proxy: {
          '/comment/*': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                secure: false
          }
        }
    },
    resolve: {
        extensions: ['.js', '.ts','.scss', '.css', '.html','.handlebars']
    },
    node: {
        fs: "empty"
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', query: { presets: ['es2015'] }, exclude: /node_modules/ }, 
            { test: /\.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}) },
            { test: /\.scss$/, use: ExtractTextPlugin.extract({ use: [{ loader: "css-loader",options: { importLoaders: 1 } }, { loader: "sass-loader" }, { loader: "postcss-loader" }],fallback: "style-loader"}) },
            { test: /\.ts/, use: 'ts-loader', exclude: /node_modules/ },
            { test: /\.handlebars$/, use: 'handlebars-loader' },
            { test: /\.html$/, use: 'html-withimg-loader' },
            { test: /\.(png|jpg|gif)$/, use: 'file-loader?limit=819200&name=images/[hash:8].[name].[ext]' },
            { test: /\.(woff|woff2|svg|eot|ttf)\??.*$/, use: 'file-loader?name=./images/font/[name].[ext]'}
        ]
    },
    plugins: allPlugin
}