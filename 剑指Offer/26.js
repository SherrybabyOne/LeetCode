// 面试题26: 树的子结构

const isSubtree = (s, t) => {
  let res = false;
  if(s && t) {
    if(s.val === t.val) {
      res = isSameSubTree(s, t);
    }
    if(!res) {
      res = isSubtree(s.left, t) || isSubtree(s.right, t);
    }
  }
  return res;
}
var isSameSubTree = (s, t) => {
  if(!t) return true;
  if(!s) return false;
  if(s.val !== t.val) return false;
  return isSameSubTree(s.left, t.left) && isSameSubTree(s.right, t.right);
}