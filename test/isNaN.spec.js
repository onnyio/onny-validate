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
var isNaNStrict = require('../isNaN');

var expect = chai.expect;

describe('isNaN', function () {
  it('from index', function () {
    "use strict";
    expect(onnyValidate.isNaN(1)).to.be.false;
  });
  describe('global isNan', function () {
    it('global isNan 1', function () {
      "use strict";
      expect(isNaN(1)).to.be.false;
    });
    it('global isNan \'1\'', function () {
      "use strict";
      expect(isNaN('1')).to.be.false;
    });
    it('global isNan string', function () {
      "use strict";
      expect(isNaN('a')).to.be.true;
    });
    it('global isNan undefined', function () {
      "use strict";
      expect(isNaN(undefined)).to.be.true;
    });
    it('global isNan null fails', function () {
      "use strict";
      expect(isNaN(null)).to.be.false;
    });
  });
  describe('Number.isNaN', function () {
    it('Number.isNan 1', function () {
      "use strict";
      expect(Number.isNaN(1)).to.be.false;
    });
    it('Number.isNan \'1\'', function () {
      "use strict";
      expect(Number.isNaN('1')).to.be.false;
    });
    it('Number.isNan string fails', function () {
      "use strict";
      expect(Number.isNaN('a')).to.be.false;
    });
    it('Number.isNan undefined fails', function () {
      "use strict";
      expect(Number.isNaN(undefined)).to.be.false;
    });
    it('Number.isNan null fails', function () {
      "use strict";
      expect(Number.isNaN(null)).to.be.false;
    });
  });

  it('1 fails', function () {
    "use strict";
    expect(isNaNStrict(1)).to.be.false;
  });
  it('string \'1\' fails', function () {
    "use strict";
    expect(isNaNStrict('1')).to.be.false;
  });
  it('string \'a\' is not a number', function () {
    "use strict";
    expect(isNaNStrict('a')).to.be.true;
  });
  it('undefined is not a number', function () {
    "use strict";
    expect(isNaNStrict(undefined)).to.be.true;
  });
  it('null is not a number', function () {
    "use strict";
    expect(isNaNStrict(undefined)).to.be.true;
  });
});