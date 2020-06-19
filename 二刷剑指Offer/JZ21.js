function IsPopOrder(pushV, popV) {
  const stack = [];
  let i = 0;
  let j = 0;
  while (i < pushV.length) {
    if (pushV[i] !== popV[j]) {
      stack.push(pushV[i++]);
    } else {
      i++;
      j++;
      while (
        stack.length > 0 &&
        stack[stack.length - 1] === popV[j]
      ) {
        stack.pop();
        j++;
      }
    }
  }
  return stack.length === 0;
}
