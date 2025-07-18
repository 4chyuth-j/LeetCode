/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(-1);
    let tail = dummy;
    let counter = 0;
    while(l1!=null || l2!=null || counter){
        let sum = counter;
        if(l1) sum+=l1.val;
        if(l2) sum+=l2.val;
        counter = Math.floor(sum/10);

        tail.next = new ListNode(sum%10);
        tail = tail.next;
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }

    return dummy.next;
};