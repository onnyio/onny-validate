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

var validator = require('validator');
var isEmail = require('./isEmail');

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
module.exports = function (email, options) {
  if(!isEmail(email)){
    return null;
  }
  return validator.normalizeEmail(email, options);
};