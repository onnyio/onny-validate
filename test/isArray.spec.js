/**
 * @Copyright (C) 2015-2017 Onny LLC - All Rights Reserved
 *
 * This file is part of onny-validate and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2017.10.17
 */



var chai = require('chai');
var isArray = require('../isArray');

var expect = chai.expect;

describe('isArray', function(){
  it('empty array', function () {
    "use strict";
    expect(isArray([])).to.be.true;
  });
  it('number array', function () {
    "use strict";
    expect(isArray([0])).to.be.true;
  });
  it('string array', function () {
    "use strict";
    expect(isArray(["a"])).to.be.true;
  });
  it('null', function () {
    "use strict";
    expect(isArray(null)).to.be.false;
  });
  it('undefined', function () {
    "use strict";
    expect(isArray(undefined)).to.be.false;
  });
  it('string \'array\'', function () {
    "use strict";
    expect(isArray("array")).to.be.false;
  });
  it('bool Fails', function () {
    "use strict";
    expect(isArray(false)).to.be.false;
  });
  it('Numbers Fails', function () {
    "use strict";
    expect(isArray(1)).to.be.false;
  });
});