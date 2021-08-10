/**
 * @Copyright (C) 2015-2017 Onny LLC - All Rights Reserved
 *
 * This file is part of onny-validate and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2017.10.17
 */

var utilsIsEqual = require('@onny/utils/dist/isEqual');


/**
 * Uses @onny/utils to perform a deep comparison between two values to
 * determine if they are equivalent.
 *
 * Note: This method supports comparing arrays, array buffers, booleans, date objects,
 * error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and
 * typed arrays. Object objects are compared by their own, not inherited, enumerable properties.
 * Functions and DOM nodes are compared by strict equality, i.e. ===.
 *
 * @param {string|*} str1
 * @param {string|*} str2
 * @returns {boolean} - True if equal
 */
module.exports = function isEqual(str1, str2) {
  return utilsIsEqual(str1, str2);
};
