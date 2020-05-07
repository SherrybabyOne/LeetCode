const { Node, LinkList } = require('./单向链表');

class DoubleNode extends Node {
  constructor(element, next, prev = undefined) {
    super(element, next);
    this.prev = prev;
  }
}
class DoubleLinkList extends LinkList {
  constructor() {
    super();
    this.tail = undefined;
  }
  // 任意位置插入新元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoubleNode(element);
      if (index === 0) {
        if (this.head == undefined) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
        node.next = current;
      }
      this.count ++;
      return true;
    }
    return false;
  }
  // 任意位置删除元素
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
        // 如果只有一项，则只更新tail
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
      }

      this.count --;
      return current.element;
    }
    return undefined;
  }
}

const test = new DoubleLinkList();
test.insert('eee', 0)
test.insert('aaa', 1)
test.insert('bbb', 2);
test.removeAt(1);
console.log(test.count)
console.log(test)
