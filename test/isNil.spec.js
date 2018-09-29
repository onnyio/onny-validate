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
var isNil = require('../isNil');

var expect = chai.expect;

describe('isNil', function () {
  it('from index', function () {
    expect(onnyValidate.isNil(null)).to.be.true;
  });
  it('null', function () {
    expect(isNil(null)).to.be.true;
  });
  it('undefined', function () {
    expect(isNil(undefined)).to.be.true;
  });
  it('the string \'null\'', function () {
    expect(isNil('null')).to.be.true;
  });
  it('0 Fails', function () {
    expect(isNil(0)).to.be.false;
  });
  it('False Fails', function () {
    expect(isNil(false)).to.be.false;
  });
  it('Numbers Fails', function () {
    expect(isNil(1)).to.be.false;
  });
});
