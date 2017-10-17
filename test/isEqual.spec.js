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



var chai = require('chai');
var onnyValidate = require('../index');
var isEqual = require('../isEqual');

var expect = chai.expect;

describe('isEqual', function () {
  it('Testing is done in onny-utils', function () {
    "use strict";
    var apples = "apples";
    expect(isEqual('apples', apples)).to.be.true;
  });
  it('from index', function () {
    "use strict";
    var apples = "apples";
    expect(onnyValidate.isEqual('apples', apples)).to.be.true;
  });


});