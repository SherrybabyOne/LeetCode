/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if(root == null){return 0;}
    return pathSum(root.left,sum)+pathSum(root.right,sum)+getdfs(root ,sum);
};
    let getdfs = function(node, sum){
    let num = 0;
    if (node === null) return 0;
    if (node.val === sum) num = 1;
    return num + getdfs(node.left ,sum-node.val) + getdfs(node.right ,sum-node.val);
};