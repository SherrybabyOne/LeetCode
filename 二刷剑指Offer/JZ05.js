const stack = [];
const stackOut = [];
function push(node) {
  stack.push(node);
}
function pop() {
  if (!stackOut.length) {
    while (stack.length) {
      stackOut.push(stack.pop());
    }
  }
  return stackOut.pop();
}