/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const hashMap = {};
  for (let i = 0; i < strs.length; i++) {
    const count = new Array(26).fill(0);
    const s = strs[i];
    for (const c of s) {
      count[c.codePointAt() - 'a'.codePointAt()]++;
    }
    const hashKey = count.join('-');
    if (hashMap[hashKey] != undefined) {
      hashMap[hashKey].push(s);
    } else {
      hashMap[hashKey] = [s];
    }
  }
  const res = [];
  for (const k in hashMap) {
    res.push(hashMap[k]);
  }
  return res;
};