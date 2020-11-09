/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 方法一：递归
var convertBST = function(root) {
  let curSum = 0;
  
  const fn = node => {
    if (!node) return;
    fn(node.right);
    curSum += node.val;
    node.val = curSum;
    fn(node.left);
  }

  fn(root);
  return root;
};

// 方法二：非递归（栈）
var convertBST = function(root) {
  if (!root) return root;
  const stack = [];
  let curSum = 0;
  let cur = root;
  while (stack.length > 0 || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.right;
    }
    cur = stack.pop();

    curSum += cur.val;
    cur.val = curSum;

    cur = cur.left;
  }
  return root;
}