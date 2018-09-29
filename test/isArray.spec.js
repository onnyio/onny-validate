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
var isArray = require('../isArray');

var expect = chai.expect;

describe('isArray', function () {
  it('from index', function () {
    expect(onnyValidate.isArray([])).to.be.true;
  });
  it('empty array', function () {
    expect(isArray([])).to.be.true;
  });
  it('number array', function () {
    expect(isArray([0])).to.be.true;
  });
  it('string array', function () {
    expect(isArray(['a'])).to.be.true;
  });
  it('null', function () {
    expect(isArray(null)).to.be.false;
  });
  it('undefined', function () {
    expect(isArray(undefined)).to.be.false;
  });
  it('string \'array\'', function () {
    expect(isArray('array')).to.be.false;
  });
  it('bool Fails', function () {
    expect(isArray(false)).to.be.false;
  });
  it('Numbers Fails', function () {
    expect(isArray(1)).to.be.false;
  });
});
