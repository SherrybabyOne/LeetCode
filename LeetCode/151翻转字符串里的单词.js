/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const sNew = s.replace(/\s{2,}/g, ' ').trim();
  return sNew.split(' ').reverse().join(' ');
};