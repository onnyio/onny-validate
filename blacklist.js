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

var blacklist = require('validator/lib/blacklist');
var isString = require('./isString');

/**
 * remove characters that appear in the blacklist. The characters are used in a
 * RegExp and so you will need to escape some chars, e.g. blacklist(input, '\\[\\]').
 * @param {string} input
 * @param {string} chars
 * @returns {string|boolean} - false if invalid, otherwise chars omitted string
 */
module.exports = function (input, chars) {
  if (!isString(input)) { return false; }
  if (!isString(chars)) { return false; }

  return blacklist(input, chars);
};
