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


var isMongoId = require('validator/lib/isMongoId');
var isString = require('./isString');

/**
 * check if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 *
 * See [MongoDB ObjectId]{@link https://docs.mongodb.com/manual/reference/method/ObjectId/}
 * See [MongoDB ObjectId]{@link https://docs.mongodb.com/manual/reference/method/ObjectId/}
 *
 * @param {*|String} value
 * @returns {boolean} - true if formatted as a mongoID
 */
module.exports = function (value) {
  return isString(value) && isMongoId(value);
};
