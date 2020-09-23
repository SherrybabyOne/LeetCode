function ListNode(key, val) {
  this.key = key;
  this.val = val;
  this.pre = null;
  this.next = null;
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.hashTable = {};
  this.count = 0;
  this.dummyHead = new ListNode();
  this.dummyTail = new ListNode();
  this.dummyHead.next = this.dummyTail;
  this.dummyTail.pre = this.dummyHead;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.hashTable[key];
  if (!node) return -1;
  this.moveToHead(node);
  return node.val;
};

LRUCache.prototype.moveToHead = function(node) {
  this.removeFromList(node);
  this.addToHead(node);
}
LRUCache.prototype.removeFromList = function(node) {
  const preNode = node.pre;
  const nextNode = node.next;
  preNode.next = nextNode;
  nextNode.pre = preNode;
}
LRUCache.prototype.addToHead = function(node) {
  node.pre = this.dummyHead;
  node.next = this.dummyHead.next;
  this.dummyHead.next.pre = node;
  this.dummyHead.next = node;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const node = this.hashTable[key];
  if (!node) {
    const newNode = new ListNode(key, value);
    this.hashTable[key] = newNode;
    this.addToHead(newNode);
    this.count++;
    if (this.count > this.capacity) {
      this.removeLRUItem();
    }
  } else {
    node.val = value;
    this.moveToHead(node);
  }
};
LRUCache.prototype.removeLRUItem = function() {
  const tialItem = this.dummyTail.pre;
  this.removeFromList(tialItem);
  delete this.hashTable[tialItem.key];
  this.count--;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */