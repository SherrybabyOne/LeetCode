/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(preorder.length === 0 && inorder.length ===0) return null;
  let root = {};
  root.val = preorder[0];

  let rootIndexOrder = inorder.indexOf(root.val);

  // 左子树
  let leftInOrder = inorder.slice(0, rootIndexOrder);
  let leftPreOrder = preorder.slice(1, leftInOrder.length + 1);
  root.left = buildTree(leftPreOrder, leftInOrder);

  // 右子树
  let rightInOrder = inorder.slice(rootIndexOrder + 1);
  let rightPreOrder = preorder.slice(rootIndexOrder + 1);
  root.right = buildTree(rightPreOrder, rightInOrder);

  return root;
};