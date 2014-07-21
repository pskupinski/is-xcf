!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.isXcf=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';
module.exports = function (buf) {
  if (!buf || buf.length < 8) return false;

  // gimp xcf files start with "gimp xcf"
  return buf[0] === 103 &&
         buf[1] === 105 &&
         buf[2] === 109 &&
         buf[3] === 112 &&
         buf[4] === 32 &&
         buf[5] === 120 &&
         buf[6] === 99 &&
         buf[7] === 102;
};

},{}]},{},[1])
(1)
});