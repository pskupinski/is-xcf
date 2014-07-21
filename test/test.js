'use strict';
var assert = require('assert');
var isXCF = require('../index.js');
var fs = require('fs');
var xcfTestFile = fs.readFileSync('test/fixture.xcf');

it('should reject a JPEG image from a buffer', function () {
  var jpegTestFile = fs.readFileSync('test/fixture.jpg');
  assert(!isXCF(jpegTestFile));
});

it('should detect an XCF image from a buffer', function () {
  assert(isXCF(xcfTestFile));
});

it('should work with Uint8Arrays', function () {
  var byteArray = new Uint8Array(xcfTestFile.length);
  for (var i = 0; i < xcfTestFile.length; i++) {
    byteArray[i] = xcfTestFile[i];
  }
  assert(isXCF(byteArray));
});
