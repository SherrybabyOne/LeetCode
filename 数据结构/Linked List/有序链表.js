const { Node, LinkList } = require('./单向链表');

class SortedLinkList extends LinkList {
  super();

  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    this.super.insert(element, this.getIndexNextSortedElement(element));
  }
  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      if (current.element > element) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}