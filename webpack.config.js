/**
 * @Author: Sam.Shen <SamMFFL>
 * @Date:   2017-05-29
 * @Email:  samfec@163.com
 * @Project: webpack 2
 * @Last modified by:   SamMFFL
 * @Last modified time: 2017-05-29
 */

var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
