// 面试题35: 复杂链表的复制
// LeetCode原题138


// 方法一: 哈希表法 空间复杂度: O(n), 空间复杂度: O(n)
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if(!head) return null;
  const hashMap = new Map();
  const root = new Node(head.val);
  let newNode1 = root;
  let newNode2 = root;
  let node1 = head.next;
  let node2 = head;
  
  hashMap.set(head, root);
  hashMap.set(null, null);
  while(node1) {
    const next = new Node(node1.val);
    newNode1.next = next;
    newNode1 = next;
    hashMap.set(node1, newNode1);
    node1 = node1.next;
  }
  while(node2) {
    newNode2.random = hashMap.get(node2.random)
    newNode2 = newNode2.next;
    node2 = node2.next;
  }
  return root;
};