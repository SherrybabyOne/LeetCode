/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// 递归写法
var binaryTreePaths = function(root) {
  if (!root) return [];
  const res = [];
  function _binaryTreePaths(node, str) {
    if (!node.left && !node.right) return res.push(str);
    node.left && _binaryTreePaths(node.left, str + `->${node.left.val}`);
    node.right && _binaryTreePaths(node.right, str + `->${node.right.val}`);
  }
  _binaryTreePaths(root, `${root.val}`);
  return res;
};
// 非递归写法
var binaryTreePaths = function(root) {
  if (!root) return [];
  const res = [];
  const stack = [];
  let p = root;
  const set = new Set();
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const node = stack[stack.length - 1];
    if (!node.left && !node.right) {
      res.push(stack.map(item => item.val).join('->'));
    }
    if (node.right && !set.has(node.right)) {
      set.add(node.right);
      p = node.right;
    } else {
      stack.pop();
    }
  }
  return res;
};