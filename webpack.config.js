const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: './src/index.js', // point d'entrée
    output: {
        filename: 'bundle.js', // nom du fichier de sortie
        path: path.resolve(__dirname, 'dist'), // dossier de sortie
        clean: true
    },
    module: {
        rules: [{
            test: /\.js$/, // tous les fichiers .js
            exclude: /node_modules/, // sauf le dossier node_modules
            use: {
                loader: 'babel-loader' // on utilise babel-loader
            }
        }, {
            test: /\.css$/, // tous les fichiers .css
            use: ['style-loader', 'css-loader'] // on utilise style-loader et css-loader
        },{
            test: /\.(png|jpg|jpeg|webp|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    publicPath: 'img/',
                    emitFile: true,
                    esModule: false
                }
            }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // favicon: './src/assets/img/favicon.ico',
            title: 'Webpack App'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    // devServer: {}
}