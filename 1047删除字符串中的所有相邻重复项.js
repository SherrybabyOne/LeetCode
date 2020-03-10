/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  if (!S) return '';
  const stack = [];
  for (let item of S) {
    if (stack[stack.length - 1] === item) stack.pop();
    else stack.push(item);
  }
  return stack.join('');
};