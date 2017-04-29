/**
 * @Copyright (C) 2015-2017 Onny LLC - All Rights Reserved
 *
 * This file is part of onny-validate and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2017.4.28
 */


'use strict'

var isArray = require('./isArray');
var isNull = require('./isNull');
var isBool = require('./isBool');
var isString = require('./isString');

module.exports = {
  /**
   * Are we an array?
   *
   * @param {*} value - value to test
   * @returns {boolean} - true if array, false if not
   */
  isArray: function(value){
    return isArray(value);
  },

  /**
   * @name module.exports.isNull
   * @function
   * @param {*} value - value to test
   * @returns {boolean} - true if null or defined, false if not
   */
  isNull: function(value){
    return isNull(value);
  },
  /**
   * @name module.exports.isBool
   * @function
   * @param {*} value - the value to test
   * @param {boolean} [numAllowed] - should we treat 1/0 as true/false. defaults to false
   * @returns {boolean} - true if boolean, false if not
   */
  isBool: function(value, numAllowed){
    return isBool(value, numAllowed);
  },
  /**
   * @name module.exports.isString
   * @function
   * @param {*} value - value to test
   * @returns {boolean} - true if string, false if not
   */
  isString: function(value){
    return isString(value);
  }
};