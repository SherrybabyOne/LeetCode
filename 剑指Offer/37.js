// 面试题37： 序列化二叉树

// 序列化
const serialize = (root) => {
  if(root == null) {
    console.log('$');
    return;
  }
  console.log(root.val)
  serialize(root.left);
  serialize(root.right);
}
