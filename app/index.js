/**
 * @Author: Sam.Shen <SamMFFL>
 * @Date:   2017-05-29
 * @Email:  samfec@163.com
 * @Project: webpack 2
 * @Last modified by:   SamMFFL
 * @Last modified time: 2017-05-30
 */


import _ from 'lodash';

(function() {
  'use strict';
  console.log(1);
  function component() {

    let element = document.createElement('div');

    element.innerHtml = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());

}());
