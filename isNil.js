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

var isEqual = require('./isEqual');

/**
 * @param {*} value - value to test
 * @returns {boolean} - true if null or defined, false if not
 */
module.exports = function isNull(value) {
  if (value == null || typeof (value) === 'undefined') {
    return true;
  }
  return (isEqual(value, 'null'));
};
