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

var isString = require('./isString');
var validator = require('validator');

/**
 *
 * @param {*} value - the value to test
 * @param {boolean} numAllowed - should we treat 1/0 as true/false. defaults to false
 * @returns {boolean} - true if boolean, false if not
 */
module.exports = function isBoolean(value, numAllowed) {
  if (typeof value === 'boolean') { return true; }
  if (numAllowed) {
    if (value === 1 || value === 0) { return true; }
  }
  if (isString(value)) {
    return validator.isBoolean(value);
  }
  return false;
};
