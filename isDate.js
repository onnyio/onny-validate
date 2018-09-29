/**
 * @Copyright (C) 2015-2018 Onny LLC - All Rights Reserved
 *
 * This file is part of onny-validate and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2018.9.29
 */

var isISO8601 = require('validator/lib/isISO8601');
var isString = require('./isString');
var isNil = require('./isNil');


/**
 * @param {*|Date} value
 * @returns {boolean} - true if valid date
 */
module.exports = function (value) {
  if (isNil(value)) { return false; }
  if (isString(value)) {
    return isISO8601(value);
  }
  return isISO8601(value.toISOString());
};
