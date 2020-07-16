/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode) {
  if (!pNode) return null;
  let root = null;
  let temp = pNode;
  while (temp) {
    root = temp;
    temp = temp.next;
  }

  const list = [];
  inorderTraversal(root, list);

  const index = list.indexOf(pNode);
  return list[index + 1];
}

function inorderTraversal(root, list) {
  const stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    list.push(current);
    current = current.right;
  }
}