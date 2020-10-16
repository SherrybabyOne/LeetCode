/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, hash = {}) {
  if (!s.length) return true;
  for (let i = 1; i < s.length + 1; i++) {
    const sTemp = s.slice(0, i);
    if (wordDict.indexOf(sTemp) !== -1) {
      const sRest = s.slice(i);
      if (hash[sRest] === false) continue;
      if (hash[sRest] === true) return true;
      const result = wordBreak(s.slice(i), wordDict, hash);
      hash[sRest] = result;
      if (result) return true;
      else continue;
    }
  }
  return false;
};