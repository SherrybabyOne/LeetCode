/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    // 中序: [左子树， 根结点， 右子树]
    // 后序: [左子树， 右子树， 根结点]
    if(inorder.length === 0 && postorder.length ===0) return null;
    let root = {};
    let rootVal = postorder[postorder.length - 1];
    root.val = rootVal;
    let rootIndexOrder = inorder.indexOf(rootVal);
    // 左子树
    let leftInorder = inorder.slice(0, rootIndexOrder);
    let leftPostorder = postorder.slice(0, rootIndexOrder);
    root.left = buildTree(leftInorder, leftPostorder);
    // 右子树
    let rightInorder = inorder.slice(rootIndexOrder + 1);
    let rightPostorder = postorder.slice(rootIndexOrder, postorder.length - 1);
    root.right = buildTree(rightInorder, rightPostorder);
    return root;
};