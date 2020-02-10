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