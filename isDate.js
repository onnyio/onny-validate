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

var validator = require('validator');
var isString = require('./isString');



/**
 * @param {*|Date} value
 * @returns {boolean} - true if valid date
 */
module.exports = function (value) {
  if(isString(value)){
    return validator.isISO8601(value)
  }
  return validator.isISO8601(value.toISOString())
};