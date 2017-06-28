var webpack = require('webpack');
var path = path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractSass = new ExtractTextPlugin({
    filename: 'main.css',
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        pageOne: './app/entry/pageOne.js',
        pageTwo: './app/entry/pageTwo.js',
        vendor: ['handlebars']
    },
    output: {
        path: __dirname + '/build', 
        filename: '[name].js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        /*proxy: {
          '/api/*': {
              target: 'http://localhost:houduanjiekou',
              secure: false
          }
        }*/
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
            { test: /\.scss$/, use: extractSass.extract({ use: [{ loader: "css-loader",options: { importLoaders: 1 } }, { loader: "sass-loader" }, { loader: "postcss-loader" }],fallback: "style-loader"}) },
            { test: /\.ts/, use: 'ts-loader', exclude: /node_modules/ },
            { test: /\.handlebars$/, use: 'handlebars-loader' },
            { test: /\.html$/, use: 'raw-loader' },
            { test: /\.(png|jpg|gif)$/, use: 'url?limit=819200' }
        ]
    },
    plugins: [
        extractSass,
        /*new ExtractTextPlugin({
            filename: 'main.css',
            disable: false,
            allChunks: true
        }),*/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),
        new htmlWebpackPlugin({
            title: '这个是最麻烦的页面',
            filename: "pageTwo.html",
            inject: true,
            showErrors: true,
            chunks:["vendor","pageTwo"]
        }),
        new htmlWebpackPlugin({
            title: '这是第一个页面',
            filename: "index.html",
            inject: true,
            showErrors: true,
            chunks:["vendor","pageOne"]
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery"
        })
    ]
}