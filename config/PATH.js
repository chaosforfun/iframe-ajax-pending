require('@babel/polyfill');
require('@babel/register')({
    ignore: [
        /node_modules.(?!mocker-api)/,
    ],
});
// 因为后面的 customConfig 引用了 mocker-api,用了node 6 不支持的语法
const path = require('path');

const ROOT = process.cwd();
const SRC = path.resolve(ROOT, 'src');
const DIST = path.resolve(ROOT, 'dist', 'statics');

module.exports = {
    ROOT,
    SRC,
    DIST,
};
