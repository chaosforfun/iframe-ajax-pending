require('@babel/register')
const apiMocker = require('mocker-api');
const path = require('path');


const expressMiddleWare = function(app) {
    apiMocker(app, path.join(__dirname, '../mock/index.js'));
}

module.exports = expressMiddleWare
