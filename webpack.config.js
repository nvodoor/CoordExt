const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin')
const cssWebPackPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: { minimize: true }
                }
            },
            {
                test: /\.css$/,
                use: [cssWebPackPlugin.loader, "css-loader"]
                
            }
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
            template: './devassets/index.html',
            filename: 'index.html'
        }),
        new cssWebPackPlugin({
            filename: "[name].css",
            chunkFileName: "[id].css"
        })
    ]
}