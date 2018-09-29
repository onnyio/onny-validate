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
var isDateBefore = require('../isDateBefore');

var expect = chai.expect;

describe('isDateBefore', function () {
  it('before date', function () {
    expect(isDateBefore(new Date(2016, 12))).to.be.true;
  });
  it('after date', function () {
    expect(isDateBefore(new Date(Date.now() + 10000))).to.be.false;
  });
  it('use index', function () {
    expect(onnyValidate.isDateBefore(new Date(2016, 12))).to.be.true;
  });
});
