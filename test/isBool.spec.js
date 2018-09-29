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
var isBool = require('../isBool');

var expect = chai.expect;

describe('isBool', function () {
  it('from index', function () {
    expect(onnyValidate.isBool(true)).to.be.true;
  });
  it('true', function () {
    expect(isBool(true)).to.be.true;
  });
  it('false', function () {
    expect(isBool(false)).to.be.true;
  });
  it('"true"', function () {
    expect(isBool('true')).to.be.true;
  });
  it('"false"', function () {
    expect(isBool('false')).to.be.true;
  });

  describe('numAllowed == false', function () {
    it('1 returns false', function () {
      expect(isBool(1)).to.be.false;
    });
    it('0 returns false', function () {
      expect(isBool(0)).to.be.false;
    });
  });

  describe('nulAllowed == true', function () {
    it('1 returns true', function () {
      expect(isBool(1, true)).to.be.true;
    });
    it('0 returns true', function () {
      expect(isBool(0, true)).to.be.true;
    });
  });
});
