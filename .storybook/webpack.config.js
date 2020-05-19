const merge = require('webpack-merge');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devConfig = require('../config/webpack.dev.js')
module.exports = async ({ config }) => {
    config.module.rules.forEach(rule => {
        // storybook 默认图片配置会导致业务代码中的图片加载有问题,所以需要exclude掉业务代码
        // 然后用我们自己的配置来处理图片
        if(rule.test.exec && rule.test.toString().match('svg|ico|jpg|jpeg|png')) {
            rule.exclude = /src/
        }
    })
    let myConfig = merge(config, {
        module: devConfig.module,
        resolve: devConfig.resolve,
        plugins: [
            new CaseSensitivePathsPlugin(),
            new MiniCssExtractPlugin({
                filename: 'css/[name]-[contenthash].css',
                chunkFilename: 'css/[name]-[contenthash].css',
            }),
        ]
    })
    console.dir(myConfig, { depth: null });
    return myConfig
}
