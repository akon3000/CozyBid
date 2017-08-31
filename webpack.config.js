const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: {
        "chunk.app": './app/index.js',
    },
    output: {
        filename: '[name].js',
        // sourceMapFilename: '[name].map',
        path: path.resolve(__dirname, 'build'),
    },
    // devtool: '#source-map',
    devServer: {
        historyApiFallback: false,
        // contentBase: './build',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         {
            //             loader: "style-loader" // creates style nodes from JS strings
            //         }, 
            //         {
            //             loader: "css-loader" // translates CSS into CommonJS
            //         },
            //         {
            //             loader: "sass-loader" // compiles Sass to CSS
            //         }
            //     ],
            // },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [ 'url-loader' ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'CozyBid - Test',
            template: './app/index.ejs',
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.NoErrorsPlugin()
    ],
}

module.exports = config;