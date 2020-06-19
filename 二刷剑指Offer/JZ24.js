/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
  var result = [];
  if (root === null) {
      return result;
  }
  dfsFind(root, expectNumber, [], 0, result);
  return result;

}
function dfsFind(root, expectNumber, path, currentSum, result) {
  currentSum += root.val;

  path.push(root.val);

  if (currentSum == expectNumber && root.left == null && root.right == null) {
      result.push(path.slice(0));
  }
  if (root.left != null) {
      dfsFind(root.left, expectNumber, path, currentSum, result);
  }

  if (root.right != null) {
      dfsFind(root.right, expectNumber, path, currentSum, result);
  }

  path.pop();
}