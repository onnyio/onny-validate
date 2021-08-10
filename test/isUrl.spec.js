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
var isUrl = require('../isURL');

var expect = chai.expect;

describe('isUrl', function () {
  it('from index', function () {
    expect(onnyValidate.isUrl('https://www.onny.io/')).to.be.true;
  });
  it('number', function () {
    expect(isUrl(1)).to.be.false;
  });
  it('is URL', function () {
    expect(isUrl('https://www.onny.io/')).to.be.true;
  });
  it('is not a url', function () {
    expect(isUrl('not a url')).to.be.false;
  });
  it('null', function () {
    expect(isUrl(null)).to.be.false;
  });
  it('undefined', function () {
    expect(isUrl(undefined)).to.be.false;
  });
  it('has underscore', function () {
    expect(isUrl('https://youtu.be/h_29KxKc34E')).to.be.true;
  });
});
