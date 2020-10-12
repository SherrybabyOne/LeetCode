/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let minLen = Infinity, resL;
  let map = {};
  let missingType = 0;
  for (const char of t) {
    if (!map[char]) {
      missingType++;
      map[char] = 1;
    } else { 
      map[char]++;
    }
  }
  let left = 0, right = 0;
  for (; right < s.length; right++) {
    let rightChar = s[right];
    if (map[rightChar] !== undefined) map[rightChar]--;
    if (map[rightChar] == 0) missingType--;
    while (missingType == 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        resL = left;
      }
      let leftChar = s[left];
      if (map[leftChar] !== undefined) map[leftChar]++;
      if (map[leftChar] > 0) missingType++;
      left++;
    }
  }
  return s.slice(resL, resL + minLen);
};