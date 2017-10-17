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

var isDate = require('./isDate');
var isNull = require('./isNull');

var validator = require('validator');


/**
 * @param {*|Date} value - value to check
 * @param {Date} afterDate - the date to check against
 * @returns {boolean} - true if valid date is after afterDate
 */
module.exports = function (value, afterDate) {
  if(!isDate(value)){ return false; }

  // default to now
  if(isNull(afterDate)){ afterDate = Date.now();
  }else{
    // verify our afterDate is a valid date
    if(!isDate(afterDate)){
      return false;
    }
  }
  return validator.isBefore(value, afterDate)
};