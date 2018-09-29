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

var isDate = require('./isDate');
var isNil = require('./isNil');
var isString = require('./isString');

var isAfter = require('validator/lib/isAfter');

/**
 * @param {*} value
 * @return {?string} ISO string if valid, otherwise void
 */
function getDateISO(value) {
  if (!isDate(value)) { return undefined; }

  if (!isString(value)) {
    // we have a date, but it's not a string
    return value.toISOString();
  }
  return value;
}

/**
 * @param {*|Date} value - value to check
 * @param {string|Date} [afterDate=new Date()] - the date to check against
 * @returns {boolean} - true if valid date before
 */
module.exports = function (value, afterDate) {
  var strValue = getDateISO(value);
  var strAfterDate;
  if (!strValue) { return false; }

  if (isNil(afterDate)) {
    // default to now
    strAfterDate = new Date().toISOString();
  } else {
    strAfterDate = getDateISO(afterDate);
    if (!strAfterDate) {
      return false;
    }
  }
  return isAfter(strValue, strAfterDate);
};
