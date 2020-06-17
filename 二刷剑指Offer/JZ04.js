/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
  function buildTree(preIndex, startIndex, endIndex) {
    if (preIndex > pre.length - 1 || startIndex > endIndex) {
      return null;
    }
    const rootVal = pre[preIndex];
    const root = new TreeNode(rootVal);
    let rootIndex = startIndex;
    for (let i = startIndex; i <= endIndex; i++) {
      if (rootVal === vin[i]) {
        rootIndex = i;
        break;
      }
    }
    root.left = buildTree(preIndex + 1, startIndex, rootIndex - 1);
    root.right = buildTree(preIndex + 1 + rootIndex - startIndex, rootIndex + 1, endIndex);
    return root;
  }
  return buildTree(0, 0, vin.length - 1);
}