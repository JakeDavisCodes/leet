/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  if (n <= 0) return false

  const log = Math.log(n) / Math.log(4)

  if (log % 1 === 0 ) return true;
  else return false;
};