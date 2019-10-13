/**
 * @Copyright (C) 2015-2018 Onny LLC - All Rights Reserved
 *
 * This file is part of onny-validate and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2018.1.17
 */

var isURL = require('validator/lib/isURL');
var isString = require('./isString');


/**
 * check if the string is an URL.
 *
 * options is an object which defaults to { protocols: ['http','https','ftp'], require_tld: true, require_protocol: false, require_host: true, require_valid_protocol: true, allow_underscores: false, host_whitelist: false, host_blacklist: false, allow_trailing_dot: false, allow_protocol_relative_urls: false }.
 *
 * @param {string|*} str
 * @param {Object} [options]
 * @returns {boolean} - True if equal
 */
module.exports = function (str, options) {
  return isString(str) && isURL(str, options);
};
