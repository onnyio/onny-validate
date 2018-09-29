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

var escape = require('validator/lib/escape');
var isString = require('./isString');

/**
 * replace <, >, &, ', " and / with HTML entities.
 *
 * @param {string} input - the string to check
 * @returns {string|null} - string with  <, >, &, ', " and / replaced with HTML entities
 */
module.exports = function (input) {
  if (!isString(input)) {
    return null;
  }
  return escape(input);
};
