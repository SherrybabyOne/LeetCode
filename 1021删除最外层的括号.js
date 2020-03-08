/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let lrmore = 0;
  let res = '';
  for (let item of S) {
    if (item === '(') {
      if (lrmore !==  0) res += item;
      lrmore++; 
    }
    if (item === ')') {
      lrmore--;
      if (lrmore !== 0) res += item;
    }
  }
  return res;
};
