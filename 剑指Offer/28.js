// 面试题28: 对称的二叉树
// LeetCode原题102对称二叉树

const isSymmetric = (root) => {
  if(!root) return true;
  return walk(root.left, root.right);
}
var walk = (left, right) => {
  if(!left && !right) return true;
  if(left&&!right || !left&&right || left.val!==right.val) return false;
  return walk(left.left, right.right) && walk(left.right, right.left);
}