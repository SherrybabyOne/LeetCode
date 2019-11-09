// 面试题27: 二叉树的镜像

const isSymmetric = (root) => {
  if(!root) return;
  if(!root.left && !root.right) return;
  if(root.left && root.right) {
     const temp = root.right;
     root.right = root.left;
     root.left = temp
  }
  if(root.left) isSymmetric(root.left);
  if(root.right) isSymmetric(root.right);
}