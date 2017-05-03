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


'use strict'

var sanitize = require('./sanitize');

module.exports = {
  /**
   * Uses onny-utils to perform a deep comparison between two values to
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
  isEqual: function isEqual(str1, str2) {
    return require('./validate/isEqual')(str1, str2);
  },

  /**
   * @param {*|Array} value - value to test
   * @returns {boolean} - true if array, false if not
   */
  isArray: function(value){
    return require('./validate/isArray')(value);
  },

  /**
   * @param {*|null} value - value to test
   * @returns {boolean} - true if null or defined, false if not
   */
  isNull: function(value){
    return require('./validate/isNull')(value);
  },
  /**
   * @param {*|boolean} value - the value to test
   * @param {boolean} [numAllowed] - should we treat 1/0 as true/false. defaults to false
   * @returns {boolean} - true if boolean, false if not
   */
  isBool: function(value, numAllowed){
    return require('./validate/isBool')(value, numAllowed);
  },
  /**
   * @param {*|string} value - value to test
   * @returns {boolean} - true if string, false if not
   */
  isString: function(value){
    return require('./validate/isString')(value);
  },

  /**
   * @param {*|string} value - value to test
   * @returns {boolean} - true if email, false if not
   */
  isEmail: function (value) {
    return require('./validate/isEmail')(value);
  },

  /**
   * @param {*|string} value - value to test
   * @returns {boolean} - true if valid password, false if not
   */
  isPassword: function (value) {
    return require('./validate/isPassword')(value);
  },

  /**
   * @param {*|Date} value
   * @returns {boolean} - true if valid date
   */
  isDate: function (value) {
    return require('./validate/isDate')(value);
  },

  /**
   * @param {*|Date} value - value to check
   * @param {Date} beforeDate - the date to check against
   * @returns {boolean} - true if valid date before
   */
  isDateBefore: function (value, beforeDate) {
    return require('./validate/isDateBefore')(value, beforeDate);
  },

  /**
   * @param {*|Date} value - value to check
   * @param {Date} afterDate - the date to check against
   * @returns {boolean} - true if valid date is after afterDate
   */
  isDateAfter: function (value, afterDate) {
    return require('./validate/isDateAfter')(value, afterDate);
  },

  /**
   * check if the string is a valid hex-encoded representation of a MongoDB ObjectId.
   *
   * See [MongoDB ObjectId]{@link https://docs.mongodb.com/manual/reference/method/ObjectId/}
   *
   * @param {*|String} value
   * @returns {boolean} - true if formatted as a mongoID
   */
  isMongoId: function (value) {
    return require('./validate/isMongoId')(value);
  },


  /**
   * replace <, >, &, ', " and / with HTML entities.
   *
   * @param {string} input - the string to check
   * @returns {string|null} - string with  <, >, &, ', " and / replaced with HTML entities
   */
  escape: function (input) {
    return sanitize.escape(input);
  },

  /**
   *  replaces HTML encoded entities with <, >, &, ', " and /
   *
   * @param {string} input - the string to parse
   * @returns {string|null} - string with HTML encoded entities replaced with <, >, &, ', " and /
   */
  unescape: function (input) {
    return sanitize.unescape(input);
  },

  /**
   * replace <, >, &, ', " and / with HTML entities.
   *
   * @param {string} email - the email to normalize
   * @param {object} options - canonicalizes an email address
   * @param {boolean} options.all_lowercase - Transforms the local part (before the @ symbol)
   *                  of all email addresses to lowercase. Please note that this may violate
   *                  RFC 5321, which gives providers the possibility to treat the local part
   *                  of email addresses in a case sensitive way (although in practice most -
   *                  yet not all - providers don't). The domain part of the email address is
   *                  always lowercased, as it's case insensitive per RFC 1035.
   *                  default: true
   * @param {boolean} options.gmail_lowercase - GMail addresses are known to be case-insensitive,
   *                  so this switch allows lowercasing them even when all_lowercase is set to false.
   *                  Please note that when all_lowercase is true, GMail addresses are lowercased
   *                  regardless of the value of this setting.
   *                  default: true
   * @param {boolean} options.gmail_remove_dots - Removes dots from the local part of the email
   *                  address, as GMail ignores them (e.g. "john.doe" and "johndoe" are
   *                  considered equal).
   *                  default: true
   * @param {boolean} options.gmail_remove_subaddress - Normalizes addresses by removing
   *                  "sub-addresses", which is the part following a "+" sign
   *                  (e.g. "foo+bar@gmail.com" becomes "foo@gmail.com").
   *                  default: true
   * @param {boolean} options.gmail_convert_googlemaildotcom - Converts addresses with domain
   *                  @googlemail.com to @gmail.com, as they're equivalent.
   *                  default: true
   * @param {boolean} options.outlookdotcom_lowercase - Outlook.com addresses (including Windows Live
   *                  and Hotmail) are known to be case-insensitive, so this switch allows
   *                  lowercasing them even when all_lowercase is set to false. Please note that
   *                  when all_lowercase is true, Outlook.com addresses are lowercased regardless
   *                  of the value of this setting.
   *                  default: true
   * @param {boolean} options.outlookdotcom_remove_subaddress - Normalizes addresses by removing
   *                  "sub-addresses", which is the part following a "+" sign
   *                  (e.g. "foo+bar@outlook.com" becomes "foo@outlook.com").
   *                  default: true
   * @param {boolean} options.yahoo_lowercase - Yahoo Mail addresses are known to be case-insensitive,
   *                  so this switch allows lowercasing them even when all_lowercase is set to false.
   *                  Please note that when all_lowercase is true, Yahoo Mail addresses are
   *                  lowercased regardless of the value of this setting.
   *                  default: true
   * @param {boolean} options.yahoo_remove_subaddress - Normalizes addresses by removing
   *                  "sub-addresses", which is the part following a "-" sign
   *                  (e.g. "foo-bar@yahoo.com" becomes "foo@yahoo.com").
   *                  default: true
   * @param {boolean} options.icloud_lowercase -  iCloud addresses (including MobileMe) are known to
   *                  be case-insensitive, so this switch allows lowercasing them even when
   *                  all_lowercase is set to false. Please note that when all_lowercase is true,
   *                  iCloud addresses are lowercased regardless of the value of this setting.
   *                  default: true
   * @param {boolean} options.icloud_remove_subaddress - Normalizes addresses by removing
   *                  "sub-addresses", which is the part following a "+" sign
   *                  (e.g. "foo+bar@icloud.com" becomes "foo@icloud.com").
   *                  default: true
   *
   * @returns {string|null} - string with  <, >, &, ', " and / replaced with HTML entities
   */
  normalizeEmail: function (email, options) {
    return sanitize.normalizeEmail(email, options);
  },

  /**
   * remove characters that appear in the blacklist. The characters are used in a
   * RegExp and so you will need to escape some chars, e.g. blacklist(input, '\\[\\]').
   * @param {string} input
   * @param {string} chars
   * @returns {string|false} - false if invalid, otherwise chars omitted string
   */
  blacklist: function (input, chars) {
    return sanitize.blacklist(input, chars);
  }
};