const stack = [];
const minval = [];
function push(node) {
  stack.push(node);
  if (minval[minval.length - 1] > node) {
    minval.push(node)
  } else {
    minval.push(minval[minval.length - 1]);
  }
}
function pop() {
  if (stack.length === 0) {
    return null;
  }
  stack.pop();
  minval.pop();
}
function top() {
  return stack[stack.length - 1];
}
function min() {
  return minval[minval.length - 1];
}