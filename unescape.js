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

var unescape = require('validator/lib/unescape');
var isString = require('./isString');

/**
 *  replaces HTML encoded entities with <, >, &, ', " and /
 *
 * @param {string} input - the string to parse
 * @returns {string|null} - string with HTML encoded entities replaced with <, >, &, ', " and /
 */
module.exports = function (input) {
  if (!isString(input)) {
    return null;
  }
  return unescape(input);
};
