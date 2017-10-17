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
var isEmail = require('../isEmail');

var expect = chai.expect;

describe('isString', function () {
  it('isaac@onny.io', function () {
    "use strict";
    expect(isEmail('isaac@onny.io')).to.be.true;
  });

  describe('fails', function () {
    it('isaac@onny fails', function () {
      "use strict";
      expect(isEmail('isaac@onny')).to.be.false;
    });
  })

});