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
var isString = require('../validate/isString');

/**
 *  replaces HTML encoded entities with <, >, &, ', " and /
 *
 * @param {string} input - the string to parse
 * @returns {string|null} - string with HTML encoded entities replaced with <, >, &, ', " and /
 */
module.exports = function (input) {
  if(!isString(input)){
    return null;
  }
  return validator.unescape(input);
};