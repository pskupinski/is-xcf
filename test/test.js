'use strict';
var assert = require('assert');
var isXCF = require('../index.js');
var fs = require('fs');

it('should reject a JPEG image from a buffer', function () {
  var jpegTestFile = fs.readFileSync('test/fixture.jpg');
  assert(!isXCF(jpegTestFile));
});

it('should detect an XCF image from a buffer', function () {
  var xcfTestFile = fs.readFileSync('test/fixture.xcf');
  assert(isXCF(xcfTestFile));
});
