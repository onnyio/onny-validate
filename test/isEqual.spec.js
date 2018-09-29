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
var isEqual = require('../isEqual');

var expect = chai.expect;

describe('isEqual', function () {
  it('Testing is done in onny-utils', function () {
    var apples = 'apples';
    expect(isEqual('apples', apples)).to.be.true;
  });
  it('from index', function () {
    var apples = 'apples';
    expect(onnyValidate.isEqual('apples', apples)).to.be.true;
  });
});
