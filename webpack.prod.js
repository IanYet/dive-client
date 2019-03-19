const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx)$/,
                exclude: /\/node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[hash:8].[ext]',
                    },
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[hash:8].[ext]',
                    },
                },
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css',
            chunkFilename: '[id].[hash:8].css',
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsWebpackPlugin(),
            new OptimizeCSSAssetsPlugin({}),
        ],
        splitChunks: {
            chunks: 'all',
        },
    },
}
