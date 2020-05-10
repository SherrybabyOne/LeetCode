/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 非递归写法
var lowestCommonAncestor = function(root, p, q) {
  if (root == null || root == p || root == q) return root;
  const map = new Map();
  const set = new Set();
  const queue = [];
  queue.push(root);
  while (queue.length) {
    let size = queue.length;
    while (size --) {
      const item = queue.shift();
      if (item.left) {
        queue.push(item.left);
        map.set(item.left, item);
      }
      if (item.right) {
        queue.push(item.right);
        map.set(item.right, item);
      }
    }
  }
  while (p) {
    set.add(p);
    p = map.get(p);
  }
  while (q) {
    if (set.has(q)) return q;
    q = map.get(q);
  }
};
// 递归写法
var lowestCommonAncestor = function(root, p, q) {
  if (root == null || root == p || root == q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left == null) return right;
  else if (right == null) return left;
  return root;
};