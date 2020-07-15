/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) return '';
  let res = '';
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > res.length) {
      const start = i - Math.floor((len - 1) / 2);
      const end = i + Math.floor(len / 2);
      res = s.slice(start, end + 1);
    }
  }
  return res;
};
const expandAroundCenter = (s, l, r) => {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return r - l - 1;
}
