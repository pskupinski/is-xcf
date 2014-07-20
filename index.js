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
