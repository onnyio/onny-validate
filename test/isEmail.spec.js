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


var chai = require('chai'); // eslint-disable-line import/no-extraneous-dependencies
var onnyValidate = require('../index');
var isEmail = require('../isEmail');

var expect = chai.expect;

describe('isEmail', function () {
  it('from index', function () {
    expect(onnyValidate.isEmail('isaac@onny.io')).to.be.true;
  });
  it('isaac@onny.io', function () {
    expect(isEmail('isaac@onny.io')).to.be.true;
  });

  describe('fails', function () {
    it('isaac@onny fails', function () {
      expect(isEmail('isaac@onny')).to.be.false;
    });
    it('numbers', function () {
      expect(isEmail(123)).to.be.false;
    });
    it('bool', function () {
      expect(isEmail(true)).to.be.false;
    });
  });
});
