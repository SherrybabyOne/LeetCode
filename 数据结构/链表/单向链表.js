class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

function equalsFn(a, b) {
  return a === b;
}
class LinkList {
  constructor() {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    if (this.head === undefined) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != undefined) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  remove(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      for(let i = 0; i < index && current != null; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
}

const list = new LinkList();
list.push('a');
list.push('b');
console.log(list);
// class LinkList {
//   constructor() {
//     // 链表长度
//     this.size = 0
//     // 虚拟头部
//     this.dummyNode = new Node(null, null)
//   }
//   find(header, index, currentIndex) {
//     if (index === currentIndex) return header
//     return this.find(header.next, index, currentIndex + 1)
//   }
//   addNode(v, index) {
//     this.checkIndex(index)
//     // 当往链表末尾插入时，prev.next 为空
//     // 其他情况时，因为要插入节点，所以插入的节点
//     // 的 next 应该是 prev.next
//     // 然后设置 prev.next 为插入的节点
//     let prev = this.find(this.dummyNode, index, 0)
//     prev.next = new Node(v, prev.next)
//     this.size++
//     return prev.next
//   }
//   insertNode(v, index) {
//     return this.addNode(v, index)
//   }
//   addToFirst(v) {
//     return this.addNode(v, 0)
//   }
//   addToLast(v) {
//     return this.addNode(v, this.size)
//   }
//   removeNode(index, isLast) {
//     this.checkIndex(index)
//     index = isLast ? index - 1 : index
//     let prev = this.find(this.dummyNode, index, 0)
//     let node = prev.next
//     prev.next = node.next
//     node.next = null
//     this.size--
//     return node
//   }
//   removeFirstNode() {
//     return this.removeNode(0)
//   }
//   removeLastNode() {
//     return this.removeNode(this.size, true)
//   }
//   checkIndex(index) {
//     if (index < 0 || index > this.size) throw Error('Index error')
//   }
//   getNode(index) {
//     this.checkIndex(index)
//     if (this.isEmpty()) return
//     return this.find(this.dummyNode, index, 0).next
//   }
//   isEmpty() {
//     return this.size === 0
//   }
//   getSize() {
//     return this.size
//   }
// }