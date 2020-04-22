/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 中序遍历-非递归
var isValidBST = function(root) {
  if (!root) return true;
  const stack = [];
  const res = [];
  let cur = root;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res.every((item, index) => {
    if (index !== res.length - 1) {
      if (item >= res[index + 1]) return false;
    }
    return true;
  })
};
// 中序遍历-递归
var isValidBST = function(root) {
  let prev = null;
  const help = (node) => {
    if (!node) return true;
    if(!help(node.left)) return false;
    if (prev && prev.val >= node.val) return false;
    prev = node;
    return help(node.right);
  }
  return help(root);
};
// 递归DFS
var isValidBST = function(root, lowser = null, upper = null) {
  if (!root) return true;
  if (lowser !== null && lowser >= root.val) return false;
  if (upper !== null && upper <= root.val) return false;
  return isValidBST(root.left, lowser, root.val) && isValidBST(root.right, root.val, upper);
};
// 非递归-DFS
var isValidBST = function(root) {

};