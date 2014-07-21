'use strict';
module.exports = function (buf) {
  if (!buf || buf.length < 8) return false;

  return /^gimp xcf/.test(buf);
};
