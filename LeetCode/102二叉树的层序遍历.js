/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const queue = [];
  queue.push(root);
  const res = [];
  let level = 0;
  while (queue.length) {
    res.push([]);
    let size = queue.length;
    while (size--) {
      const item = queue.shift();
      res[level].push(item.val);
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }
    level++;
  }
  return res;
};
