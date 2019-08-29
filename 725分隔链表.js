/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    let len;
    let curr = root;
    while (curr !== null) {
        len++;
        curr = curr.next;
    }
    let mod = len % k;
    let size = Math.floor(len / k);
    let res = [];
    for (let i = 0; i < k; i++) {
        res[i] = null;
    }
    curr = root;
    for (let i = 0; i < k && curr !== null; i++) {
        res[i] = curr;
        let currSize = size + (mod-- > 0 ? 1 : 0);
        for (let j = 0; j < currSize - 1; j++) {
            curr = curr.next;
        }
        let next = curr.next;
        curr.next = null;
        curr = next;
    }
    return res;
};