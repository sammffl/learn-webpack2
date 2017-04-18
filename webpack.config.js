/**
 * Created by SamMFFL on 17/4/18.
 */
var path = require('path');

const rootPath = path.resolve(__dirname);

module.exports = {
    entry: path.resolve(__dirname, 'app/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};