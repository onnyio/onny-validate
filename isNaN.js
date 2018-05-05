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

var isNil = require('./isNil');

/**
 * uses the global isNaN
 * @param {*} value - value to test
 * @returns {boolean} - true if not a number, undefined, or other non-number values
 */
module.exports = function (value) {
  // return isNaN(value)
  if (isNaN(value)) {
    return true;
  }
  if (isNil(value)) {
    return true;
  }
  return false;
};