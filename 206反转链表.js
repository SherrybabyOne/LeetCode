/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 非递归解法
var reverseList = function(head) {
	if(!head) return null;
	let curr = head;
	let prev = null;
	while(curr) {
		const nextTemp = curr.next;
		curr.next = prev;
		prev = curr;
		curr = nextTemp;
	}
	return prev;
}

// 递归解法
var reverseList = function(head) {
	function reverse(prev, curr) {
		if(!curr) return prev;
		const nextTemp = curr.next;
		curr.next = prev;
		return reverse(curr, nextTemp);
	}
	return reverse(null, head);
}