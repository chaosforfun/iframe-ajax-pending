
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const PATH = require('./PATH');

const isDev = process.env.NODE_ENV !== 'production';
module.exports = {
    entry: {
        index: path.resolve(PATH.SRC, 'index'),
    },
    plugins: [
        new LodashModuleReplacementPlugin({
            collections: true,
            shorthands: true,
            paths: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash].css',
            chunkFilename: 'css/[name]-[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            filename: isDev ? 'index.html' : '../../../index.html',
            template: 'index.html',
            title: 'dev debug',
            inject: false,
            chunksSortMode: 'none',
        }),
        // 本地分析打包模块，需要时开启
        // new BundleAnalyzerPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            rootMode: 'upward',
                        },
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            rootMode: 'upward',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: [
            PATH.SRC,
            path.resolve(PATH.ROOT, 'node_modules'),
        ],
    },
};
