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
var isNaNStrict = require('../isNaN');

var expect = chai.expect;

describe('isNaN', function () {
  it('from index', function () {
    expect(onnyValidate.isNaN(1)).to.be.false;
  });
  describe('global isNan', function () {
    it('global isNan 1', function () {
      expect(isNaN(1)).to.be.false; // eslint-disable-line no-restricted-globals
    });
    it('global isNan \'1\'', function () {
      expect(isNaN('1')).to.be.false; // eslint-disable-line no-restricted-globals
    });
    it('global isNan string', function () {
      expect(isNaN('a')).to.be.true; // eslint-disable-line no-restricted-globals
    });
    it('global isNan undefined', function () {
      expect(isNaN(undefined)).to.be.true; // eslint-disable-line no-restricted-globals
    });
    it('global isNan null fails', function () {
      expect(isNaN(null)).to.be.false; // eslint-disable-line no-restricted-globals
    });
  });
  describe('Number.isNaN', function () {
    it('Number.isNan 1', function () {
      expect(Number.isNaN(1)).to.be.false;
    });
    it('Number.isNan \'1\'', function () {
      expect(Number.isNaN('1')).to.be.false;
    });
    it('Number.isNan string fails', function () {
      expect(Number.isNaN('a')).to.be.false;
    });
    it('Number.isNan undefined fails', function () {
      expect(Number.isNaN(undefined)).to.be.false;
    });
    it('Number.isNan null fails', function () {
      expect(Number.isNaN(null)).to.be.false;
    });
  });

  it('1 fails', function () {
    expect(isNaNStrict(1)).to.be.false;
  });
  it('string \'1\' fails', function () {
    expect(isNaNStrict('1')).to.be.false;
  });
  it('string \'a\' is not a number', function () {
    expect(isNaNStrict('a')).to.be.true;
  });
  it('undefined is not a number', function () {
    expect(isNaNStrict(undefined)).to.be.true;
  });
  it('null is not a number', function () {
    expect(isNaNStrict(undefined)).to.be.true;
  });
});
