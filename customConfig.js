//  自定义项目配置
const path = require('path');
const apiMocker = require('mocker-api');

module.exports = {
    opsConfig: {
        CDN_FILE_BASE: 'k12/exam/',
    },
    webpackConfig: {
        // 移入common处理build error
        // module: {
        //     rules: [{ test: /\.tsx?$/, loader: 'ts-loader', options: { configFile: 'tsconfig.build.json' } }],
        // },
        // resolve: {
        //     extensions: ['.ts', '.tsx', '.scss'],
        // },
        devServer: {
            hot: true,
            host: '0.0.0.0',
            port: 8700,
            inline: true,
            disableHostCheck: true,
            stats: {
                colors: true,
            },
            https: false,
            historyApiFallback: true,
            before(app) {
                apiMocker(app, path.join(__dirname, './mock/index.js'));
            },
            proxy: {
                '/api': {
                    target: 'https://learn.neibu.koolearn.com',
                    // target: 'http://10.155.54.168:8087', // 杨晨光ip
                    // target: 'http://10.155.54.213:80', // fengqi ip
                    changeOrigin: true,
                    secure: false,
                    logLevel: 'debug',
                },
            },
        },
    },
};
