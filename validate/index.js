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
   * @param {*|Array} value - value to test
   * @returns {boolean} - true if array, false if not
   */
  isArray: function(value){
    return isArray(value);
  },

  /**
   * @function
   * @param {*|null} value - value to test
   * @returns {boolean} - true if null or defined, false if not
   */
  isNull: function(value){
    return isNull(value);
  },
  /**
   * @param {*|boolean} value - the value to test
   * @param {boolean} [numAllowed] - should we treat 1/0 as true/false. defaults to false
   * @returns {boolean} - true if boolean, false if not
   */
  isBool: function(value, numAllowed){
    return isBool(value, numAllowed);
  },
  /**
   * @param {*|string} value - value to test
   * @returns {boolean} - true if string, false if not
   */
  isString: function(value){
    return isString(value);
  },

  /**
   * @param {*|string} value - value to test
   * @returns {boolean} - true if email, false if not
   */
  isEmail: function (value) {
    return require('./isEmail')(value);
  },

  /**
   * @param {*|string} value - value to test
   * @returns {boolean} - true if valid password, false if not
   */
  isPassword: function (value) {
    return require('./isPassword')(value);
  },

  /**
   * @param {*|Date} value
   * @returns {boolean} - true if valid date
   */
  isDate: function (value) {
    return require('./isDate')(value);
  },

  /**
   * @param {*|Date} value - value to check
   * @param {Date} beforeDate - the date to check against
   * @returns {boolean} - true if valid date before
   */
  isDateBefore: function (value, beforeDate) {
    return require('./isDateBefore')(value, beforeDate);
  },

  /**
   * @param {*|Date} value - value to check
   * @param {Date} afterDate - the date to check against
   * @returns {boolean} - true if valid date is after afterDate
   */
  isDateAfter: function (value, afterDate) {
    return require('./isDateAfter')(value, afterDate);
  },

  /**
   * check if the string is a valid hex-encoded representation of a MongoDB ObjectId.
   *
   * See [MongoDB ObjectId]{@link https://docs.mongodb.com/manual/reference/method/ObjectId/}
   *
   * @param {*|String} value
   * @returns {boolean} - true if formatted as a mongoID
   */
  isMongoId: function (value) {
    return require('./isMongoId')(value);
  }
};