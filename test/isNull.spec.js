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
var isNull = require('../isNull');

var expect = chai.expect;

describe('isNull', function () {
  it('from index', function () {
    expect(onnyValidate.isNull(null)).to.be.true;
  });
  it('null', function () {
    expect(isNull(null)).to.be.true;
  });
  it('0 Fails', function () {
    expect(isNull(0)).to.be.false;
  });
  it('False Fails', function () {
    expect(isNull(false)).to.be.false;
  });
  it('Numbers Fails', function () {
    expect(isNull(1)).to.be.false;
  });
});
