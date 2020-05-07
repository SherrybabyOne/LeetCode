const { Node, LinkList } = require('./单向链表');

class CircularLinkedList extends LinkList {
  constructor() {
    super();
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      console.log('aaaa');
      if (index === 0) {
        if (this.head == undefined) {
          console.log('aaa');
          this.head = node;
          this.head.next = this.head;
        } else {
          node.next = this.head;
          const current = this.getElementAt(this.count - 1);
          this.head = node;
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count ++;
      return true;
    }
   return false; 
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.count === 1) {
          this.head = undefined;
        } else {
          const previous = this.getElementAt(this.count - 1);
          previous.next = this.head.next;
          this.head = this.head.next;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count --;
      return current.element;
    }
    return undefined;
  }
}


const test = new CircularLinkedList();
test.insert('aaa', 0);
test.insert('bbb', 1);
test.insert('ccc', 2);
test.removeAt(2)
console.log(test);