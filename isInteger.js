/**
 * @Copyright (C) 2015-2019 Onny LLC - All Rights Reserved
 *
 * This file is part of onny-validate and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2019.3.22
 */


/**
 * @param {*} value - value to test
 * @returns {boolean} - true if a number, else false
 */
module.exports = function (value) {
  return Number.isInteger(value);
};
