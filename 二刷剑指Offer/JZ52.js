//s, pattern都是字符串
function match(s, pattern, p = 0, q = 0) {
  if (p === s.length && q === pattern.length) return true;
  if (pattern[q + 1] !== '*') {
    if (s[p] != undefined && (s[p] === pattern[q] || pattern[q] === '.')) {
      return match(s, pattern, p + 1, q + 1);
    } else {
      return false;
    }
  } else {
    let bool = false;
    if (s[p] != undefined && (s[p] === pattern[q] || pattern[q] === '.')) {
      // 重复1次或多次
      bool =  match(s, pattern, p + 1, q);
    }
    // 重复0次
    return bool || match(s, pattern, p, q + 2);
  }
}