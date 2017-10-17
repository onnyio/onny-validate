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



// (              # Start of group
//   (?=.*\d)     #   must contains one digit from 0-9
//   (?=.*[a-z])  #   must contains one lowercase characters
//   (?=.*[A-Z])  #   must contains one uppercase characters
//   (?=.*[@#$%]) #   must contains one special symbols in the list "@#$%"
//      .         #   match anything with previous condition checking
//      {5,20}    #   length at least 6 characters and maximum of 20
// )              # End of group
// http://www.regexr.com/
var passwordPattern = '^([a-zA-Z0-9].{5,50})$';
// const passwordPattern = "([A-Za-z](?=.[A-Za-z0-9@#$%])\w{5,20})";

module.exports = function (password) {
  // TODO validation: come up with actual password requirements
  return new RegExp(passwordPattern).test(password);
};