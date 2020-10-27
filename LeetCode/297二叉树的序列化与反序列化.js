/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function rserialize(root, str) {
  if (!root) return str + 'None,';
  str = str + root.val + ',';
  str = rserialize(root.left, str);
  str = rserialize(root.right, str);
  return str;
}
var serialize = function(root) {
  return rserialize(root, '');
};

function rdeserialize(dataList) {
  if (dataList[0] === 'None') {
    dataList.shift();
    return null;
  }

  const rootVal = dataList.shift();
  const root = new TreeNode(rootVal);
  root.left = rdeserialize(dataList);
  root.right = rdeserialize(dataList);

  return root;
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const dataList = data.split(',');
  if (dataList.length === 0) return null;
  return rdeserialize(dataList);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */