// 重建二叉树
// 前序遍历: [跟， 左子树， 右子树]
// 中序遍历: [左子树， 跟， 右子树]
let constructTree = (preOrder, inOrder) => {
  if(preOrder.length === 0 && inOrder.length === 0) return null;
  const root = {};
  root.val = preOrder[0];

  const rootIndexOrder = inOrder.indexOf(preOrder[0]);

  const leftPreOrder = preOrder.slice(1, rootIndexOrder + 1);
  const leftinOrder = inOrder.slice(0, rootIndexOrder);
  root.left = constructTree(leftPreOrder, leftinOrder);

  const rightPreOrder = preOrder.slice(rootIndexOrder + 1);
  const rightInOrder = inOrder.slice(rootIndexOrder + 1);
  root.right = constructTree(rightPreOrder, rightInOrder);

  return root;
}