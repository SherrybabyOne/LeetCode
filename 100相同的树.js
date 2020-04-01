/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 递归 先序遍历
var isSameTree = function(p, q) {
  if(!p && !q) return true;
  if(!p || !q) return false;
  if(p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 层次遍历 广度优先搜索
var isSameTree = function(p, q) {
  const queue = [ [p, q] ];
  while(queue.length) {
    const [a, b] = queue.shift();
    if(!booleanTwo(a, b)) return false;
    if(a) {
      queue.push([a.left, b.left]);
      queue.push([a.right, b.right]);
    }
  }
  return true;
}
function booleanTwo(a, b) {
  if(!a && !b) return true;
  if(!a || !b) return false;
  if(a.val !== b.val) return false;
  return true;
}

// 深度优先遍历
var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 广度优先遍历
var isSameTree = function(p, q) {
  const queue = [[p, q]];
  while(queue.length) {
    const [a, b] = queue.shift();
    if (!a && !b) break;
    if (!a || !b) return false;
    if (a.val !== b.val) return false;
    queue.push([a.left, b.left]);
    queue.push([a.right, b.right]);
  }
  return true;
};