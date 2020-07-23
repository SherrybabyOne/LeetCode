/* function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
} */
const arr = [];
function Serialize(pRoot) {
  if (!pRoot) {
    arr.push('#');
  } else {
    arr.push(pRoot.val);
    Serialize(pRoot.left);
    Serialize(pRoot.right);
  }
}
function Deserialize(s) {
  let node = null;
  if (arr.length < 1) {
    return null;
  }
  const val = arr.shift();
  if (val !== '#') {
    node = new TreeNode(val);
    node.left = Deserialize(arr);
    node.right = Deserialize(arr);
  }
  return node;
}