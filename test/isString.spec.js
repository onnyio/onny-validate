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
var isString = require('../isString');

var expect = chai.expect;

describe('isString', function () {
  it('from index', function () {
    expect(onnyValidate.isString('apples')).to.be.true;
  });
  it('string', function () {
    expect(isString('apples')).to.be.true;
  });
  it('number', function () {
    expect(isString(1)).to.be.false;
  });
  it('number.toString()', function () {
    var num = 1;
    expect(isString(num.toString())).to.be.true;
  });
  it('null', function () {
    expect(isString(null)).to.be.false;
  });
  it('"null" string', function () {
    expect(isString('null')).to.be.true;
  });
  it('array', function () {
    expect(isString([])).to.be.false;
  });
  it('string array', function () {
    expect(isString(['apples'])).to.be.false;
  });
});
