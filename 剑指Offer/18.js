// 面试题十八: 删除链表的节点

// 时间复杂度: O(1)
const deleteNode = (headNode, deleteNode) => {
  if(!headNode || !deleteNode) return;
  // 要删除的不是尾节点
  if(deleteNode.next != null) {
    const deleteNextNode = deleteNode.next;
    deleteNode.next = deleteNextNode.next;
    deleteNode.val = deleteNextNode.val;

    deleteNextNode = null;
  }else if(headNode === deleteNode) {
    // 链表只有一个，删除头节点
    deleteNode = null;
    headNode.val = null;
  }else {
    // 链表中有多个节点，删除尾节点
    let listNode = headNode;
    while(listNode.next.next != null) {
      listNode = listNode.next;
    }
    listNode.next = null;
    listNode = null;
  }
}