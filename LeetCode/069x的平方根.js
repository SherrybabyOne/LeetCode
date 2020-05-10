/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x === 0) return 0;
  let left = 1;
  let right = x;
  while(left < right) {
    let mid = Math.floor((left + right + 1) / 2);
    let squre = mid * mid;
    if(squre > x) {
      right = mid - 1;
    }else {
      left = mid;
    }
  }
  return left
};