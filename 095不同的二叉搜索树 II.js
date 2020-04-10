/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) return [];
  return generateTreeWithDelta(n, 0);
};

var generateTreeWithDelta = function(n, delta) {
  if (n === 0) return [null];
  if (n === 1) return [new TreeNode(n + delta)];
  const res = [];
  let node = null;
  for (let i = 1; i <= n; i++) {
    for (const ln of generateTreeWithDelta(i - 1, delta)) {
      for (const rn of generateTreeWithDelta(n - i, delta + i)) {
        node = new TreeNode(i + delta);
        node.left = ln;
        node.right = rn;
        res.push(node);
      }
    }
  }
  return res;
};
