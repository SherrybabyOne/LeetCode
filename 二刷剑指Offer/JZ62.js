/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k) {
  if (!pRoot) return null;
  if (k === 0) return null;
  const arr = [];
  inorderSearch(pRoot, arr);
  return arr[k - 1];
}
function inorderSearch (node, arr) {
  if (node != null) {
    inorderSearch(node.left, arr);
    arr.push(node);
    inorderSearch(node.right, arr);
  }
}

function KthNode(pRoot, k) {
  if (!pRoot) return null;
  if (k === 0) return null;
  const stack = [];
  const res = [];
  let current = pRoot;
  while (stack.length > 0 || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    res.push(current);
    current = current.right;
  }
  return res[k - 1];
}