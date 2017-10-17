/**
 * @Copyright (C) 2015-2017 Onny LLC - All Rights Reserved
 *
 * This file is part of onny-validate and is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Onny LLC and/or Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2017.5.7
 */



var chai = require('chai');
var onnyValidate = require('../index');
var isNull = require('../isNull');

var expect = chai.expect;

describe('isNull', function(){
  it('from index', function () {
    "use strict";
    expect(onnyValidate.isNull(null)).to.be.true;
  });
  it('null', function () {
    "use strict";
    expect(isNull(null)).to.be.true;
  });
  it('undefined', function () {
    "use strict";
    expect(isNull(undefined)).to.be.true;
  });
  it('the string \'null\'', function () {
    "use strict";
    expect(isNull("null")).to.be.true;
  });
  it('0 Fails', function () {
    "use strict";
    expect(isNull(0)).to.be.false;
  });
  it('False Fails', function () {
    "use strict";
    expect(isNull(false)).to.be.false;
  });
  it('Numbers Fails', function () {
    "use strict";
    expect(isNull(1)).to.be.false;
  });
});/**
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

