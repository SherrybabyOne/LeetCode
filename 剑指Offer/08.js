const getNext = (node) => {
  if(node === null) return null;
  const next = null;
  if(node.right !== null) {
    let pRight = node.right;
    while(pRight.left !== null) {
      pRight = pRight.left;
    }
    next = pRight;
  }else if(node.parent !== null) {
    let pCurrent = node;
    let pParent = node.parent;
    while(pParent !== null && pCurrent === pParent.right) {
      pCurrent = pParent;
      pParent = pParent.parent;
    }
    next = pParent;
  }
  return next
}