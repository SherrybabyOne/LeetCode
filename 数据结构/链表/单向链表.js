class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkList {
  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  // 获取第index个元素（从0开始）
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for(let i = 0; i < index && current != null; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  // 向链表末尾添加元素
  push(element) {
    const node = new Node(element);
    if (this.head === undefined) {
      this.head = node;
    } else {
      const current = this.getElementAt(this.count - 1);
      current.next = node;
    }
    this.count++;
  }
  // 移除第index个元素（从0元素）
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  // 在任意位置插入元素
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        previous.next = node;
        node.next = current;
      }
      this.count ++;
      return true;
    }
    return false;
  }
  // 返回一个元素的位置
  indexOf(element) {
    let current = this.head;
    for(let i = 0; i < this.count && current != undefined; i++) {
      if (current.element === element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  // 移除指定元素
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  // 链表长度
  size() {
    return this.count;
  }
  // 链表是否为空
  isEmpty() {
    return this.size() === 0;
  }
  // 返回链表头部
  getHead() {
    return this.head;
  }
  // 返回链表字符串
  toString() {
    if (this.head == undefined) {
      return '';
    }
    let objString = `${this.head}`;
    let current = this.head.next;
    for(let i = 1; i < this.size() && current.next != undefined; i++) {
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

module.exports =  { Node, LinkList };