var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './app/entry.ts'
        /*vendor: ['jquery'] */
    },
    output: {
        path: __dirname + '/build', 
        filename: 'index.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    resolve: {
        extensions: ['.js', '.ts','css','html']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'sass-loader' })
        },
        {
        test: /\.ts/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader'
    }]
    },
    plugins: [
        new ExtractTextPlugin('main.css'),
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),*/
        new htmlWebpackPlugin({
            title: 'typeScript'
        })
    ]
}