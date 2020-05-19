const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const PATH = require('./PATH');
const common = require('./webpack.common');
let customConfig = require('../customConfig');

module.exports = merge(common, {
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    output: {
        path: path.resolve(PATH.DIST),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name]-chunk.js',
        publicPath: '/',
        crossOriginLoading: 'anonymous',
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
}, customConfig.webpackConfig);
