/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  if (!path) return '';
  const pathArr = path
    .split('/')
    .filter(item => item && item !== '/' && item !== '.')
  const stack = [];
  let res = '';
  for (let i = 0; i < pathArr.length; i++) {
    if (stack.length === 0) {
      if (pathArr[i] === '..') continue;
      stack.push(pathArr[i]);
    } else {
      if (pathArr[i] === '..') {
        if (stack[stack.length - 1] === '..') {
          stack.push(pathArr[i]);
        } else {
          stack.pop();
        }
      } else {
        stack.push(pathArr[i]);
      }
    }
  }
  return `/${stack.join('/')}`;
};
