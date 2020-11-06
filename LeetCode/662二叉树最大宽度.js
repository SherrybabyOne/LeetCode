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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  if (!root) return 0;
  let res = 1;
  const queue = [[0, root]];
  while (queue.length > 0) {
    const start = queue[0][0];
    if (start > 1) {
      queue.forEach(v => v[0] -= start);
    }
    res = Math.max(res, queue[queue.length - 1][0] - queue[0][0] + 1);
    let size = queue.length;
    while (size--) {
      const [i, q] = queue.shift();
      q.left && queue.push([i * 2, q.left]);
      q.right && queue.push([i * 2 + 1, q.right]);
    }
  }
  return res;
};