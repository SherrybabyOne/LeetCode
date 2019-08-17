/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(null);
    let nextNode = res;
    // 传给下一级的值
    let params = 0;
    // 当前的值
    let val = 0;
    while(l1 != null || l2 != null) {
        // TODO
        let x = (l1 != null) ? l1.val : 0;
        let y = (l2 != null) ? l2.val : 0;
        
        val = (x + y + params) % 10;
        params = Math.floor((x + y + params) / 10);
       
        nextNode.next = new ListNode(val) 
        nextNode = nextNode.next
        
        if(l1 != null) l1 = l1.next
        if(l2 != null) l2 = l2.next        
    
    }
    if (params) {
        nextNode.next = new ListNode(params)
    }
    return res.next
};