/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  const queue = [];
  queue.push(root);
  const res = [];
  while (queue.length) {
    res.push(queue[0].val);
    let size = queue.length;
    while (size--) {
      const item = queue.shift();
      if (item.right) queue.push(item.right);
      if (item.left) queue.push(item.left);
    }
  }
  return res;
};
