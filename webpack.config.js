const path = require('path');
const webpack = require('webpack');

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
                use: [ 'style-loader', 'extract-loader', 'css-loader' ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, 
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ],
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }  
                    }
                ]
            }
            // {
            //     test: /\.(jpg|png|svg|css)$/,
            //     use: [ 'url-loader' ]
            // }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
}

module.exports = config;