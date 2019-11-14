// 面试题34: 二叉树中和为某一值的路径

const findPath = (root, expectedSum) => {
  if(!root) return false;
  const stack = [];
  let currentSum = 0;
  findPathRecursion(root, expectedSum, stack, currentSum)
}
var findPathRecursion = (root, expectedSum, stack, currentSum) => {
  currentSum += root.val;
  stack.push(root)
  if(currentSum === expectedSum && !root.left && !root.right) {
    console.log(stack)
  }
  if(!root.left) {
    findPathRecursion(root.left, expectedSum, stack, currentSum);
  }
  if(!root.right) {
    findPathRecursion(root.right, expectedSum, stack, currentSum);
  }
  stack.pop()
}