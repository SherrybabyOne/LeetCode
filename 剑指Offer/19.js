// 面试题19: 正则表达式匹配

const match = (str, pattern) => {
  if(str === null || pattern === null) return false;
  return matchCore(str, pattern)
}
function matchCore(str, pattern, strLength = 0, patternLength = 0) {
  if(!str[strLength] && !pattern[patternLength]) return true;
  if(!str[strLength] && pattern[patternLength] != '') return false;
  if(pattern[patternLength + 1] === '*') {
    if(pattern[patternLength] === str[strLength] || pattern[patternLength] === '.' && str[strLength]) {
      return matchCore(str, pattern, strLength + 1, patternLength + 2)
          || matchCore(str, pattern, strLength + 1, patternLength)
          || matchCore(str, pattern, strLength, patternLength + 2)
    }else {
      return matchCore(str, pattern, strLength, patternLength + 2)
    }
  }
  if(str[strLength] === pattern[patternLength] || (pattern[patternLength] === '.' && str[strLength])) {
    return matchCore(str, pattern, strLength + 1, patternLength + 1)
  }
  return false;
}
console.log(
  match('aaa', 'a.a'),
  match('aaa', 'ab*ac*a'),
  match('aaa', 'ab*a')
)