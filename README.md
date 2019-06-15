# onny-validate

[![NPM](https://nodei.co/npm/onny-validate.png)](https://npmjs.org/package/onny-validate)

[![Build Status](https://travis-ci.org/onnyio/onny-utils.svg?branch=master)](https://travis-ci.org/onnyio/onny-validate) [![Coverage Status](https://coveralls.io/repos/github/onnyio/onny-validate/badge.svg?branch=master)](https://coveralls.io/github/onnyio/onny-validate?branch=master)

Common validators and sanitizers for our Onny apps and utils


Mostly based on/wrappers for [validator](https://www.npmjs.com/package/validator)

## Installation
`npm i --save onny-validate`

````javascript
// load everything
import onnyUtils from 'onny-validate';

// validators only
import validators from 'onny-validate/validate';

// sanitizers only
import sanitize from 'onny-validate/sanitize';

// selective loading validators
import { isArray } from 'onny-validate';
// or
import isArray from 'onny-validate/validate/isArray';
````

## Why onny-validate?
Common validators and sanitizers to be used across all onny products



## Validators


### `isArray(value)`

Are we an array?


* @param {*|Array} value - value to test
* @returns {boolean} - true if array, false if not

### `isNull(value)`

* @param {*|null} value - value to test
* @returns {boolean} - true if null or defined, false if not

### `isBool(value, numAllowed)`
* @param {*|boolean} value - the value to test
* @param {boolean} [numAllowed] - should we treat 1/0 as true/false. defaults to false
* @returns {boolean} - true if boolean, false if not

### `isString(value)`
* @param {*|string} value - value to test
* @returns {boolean} - true if string, false if not

### `isEmail(value)`
* @param {*|string} value - value to test
* @returns {boolean} - true if email, false if not

### `isPassword(value)`
* @param {*|string} value - value to test
* @returns {boolean} - true if valid password, false if not

### `isDate(value)`
* @param {*|Date} value
* @returns {boolean} - true if valid date

### `isDateBefore(value)`
* @param {*|Date} value - value to check
* @param {Date} beforeDate - the date to check against
* @returns {boolean} - true if valid date before

### `isDateAfter(value)`
* @param {*|Date} value - value to check
* @param {Date} afterDate - the date to check against
* @returns {boolean} - true if valid date is after afterDate

### `isMongoId(value)`

check if the string is a valid hex-encoded representation of a MongoDB ObjectId.

See [MongoDB ObjectId](https://docs.mongodb.com/manual/reference/method/ObjectId/)

* @param {*|String} value
* @returns {boolean} - true if formatted as a mongoID


## Sanitizers

### `escape(input)`
Replace <, >, &, ', " and / with HTML entities.

* @param {string} input - the string to check
* @returns {string|null} - string with  <, >, &, ', " and / replaced with HTML entities

### `unescape(input)`
Replaces HTML encoded entities with <, >, &, ', " and /

* @param {string} input - the string to parse
* @returns {string|null} - string with HTML encoded entities replaced with <, >, &, ', " and /

### `normalizeEmail(email, options)`
Replace <, >, &, ', " and / with HTML entities.

* @param {string} email - the email to normalize
* @param {object} options - canonicalizes an email address
* @param {boolean} options.all_lowercase - Transforms the local part (before the @ symbol) of all email addresses to lowercase. Please note that this may violate RFC 5321, which gives providers the possibility to treat the local part of email addresses in a case sensitive way (although in practice most - yet not all - providers don't). The domain part of the email address is always lowercased, as it's case insensitive per RFC 1035.  
default: true
* @param {boolean} options.gmail_lowercase - GMail addresses are known to be case-insensitive, so this switch allows lowercasing them even when all_lowercase is set to false. Please note that when all_lowercase is true, GMail addresses are lowercased regardless of the value of this setting.  
default: true
* @param {boolean} options.gmail_remove_dots - Removes dots from the local part of the email address, as GMail ignores them (e.g. "john.doe" and "johndoe" are considered equal).  
default: true
* @param {boolean} options.gmail_remove_subaddress - Normalizes addresses by removing "sub-addresses", which is the part following a "+" sign (e.g. "foo+bar@gmail.com" becomes "foo@gmail.com").  
default: true
* @param {boolean} options.gmail_convert_googlemaildotcom - Converts addresses with domain @googlemail.com to @gmail.com, as they're equivalent.  
default: true
* @param {boolean} options.outlookdotcom_lowercase - Outlook.com addresses (including Windows Live and Hotmail) are known to be case-insensitive, so this switch allows lowercasing them even when all_lowercase is set to false. Please note that when all_lowercase is true, Outlook.com addresses are lowercased regardless of the value of this setting.  
default: true
* @param {boolean} options.outlookdotcom_remove_subaddress - Normalizes addresses by removing "sub-addresses", which is the part following a "+" sign (e.g. "foo+bar@outlook.com" becomes "foo@outlook.com").  
default: true
* @param {boolean} options.yahoo_lowercase - Yahoo Mail addresses are known to be case-insensitive, so this switch allows lowercasing them even when all_lowercase is set to false. Please note that when all_lowercase is true, Yahoo Mail addresses are lowercased regardless of the value of this setting.  
default: true
* @param {boolean} options.yahoo_remove_subaddress - Normalizes addresses by removing "sub-addresses", which is the part following a "-" sign (e.g. "foo-bar@yahoo.com" becomes "foo@yahoo.com").  
default: true
* @param {boolean} options.icloud_lowercase -  iCloud addresses (including MobileMe) are known to be case-insensitive, so this switch allows lowercasing them even when all_lowercase is set to false. Please note that when all_lowercase is true, iCloud addresses are lowercased regardless of the value of this setting.  
default: true
* @param {boolean} options.icloud_remove_subaddress - Normalizes addresses by removing "sub-addresses", which is the part following a "+" sign (e.g. "foo+bar@icloud.com" becomes "foo@icloud.com").  
default: true
* @returns {string|null} - string with  <, >, &, ', " and / replaced with HTML entities

### `blacklist(input, chars)`
* remove characters that appear in the blacklist. The characters are used in a
* RegExp and so you will need to escape some chars, e.g. blacklist(input, '\\[\\]').
* @param {string} input
* @param {string} chars
* @returns {string|false} - false if invalid, otherwise chars omitted string


##### License
[GPL-3.0 License](https://github.com/onnyio/onny-validate/blob/master/LICENSE)

Copyright (C) 2015-2019 Onny LLC - All Rights Reserved