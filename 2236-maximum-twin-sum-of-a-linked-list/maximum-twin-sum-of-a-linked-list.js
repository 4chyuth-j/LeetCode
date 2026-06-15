/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    if(head.next == null) return head.val;
    if(head.next.next==null) return head.val+head.next.val;

    let res = [];
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        res.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    let size = res.length-1;
    for(let i=0; i<res.length; i++){
        res[size-i] += slow.val;
        slow = slow.next;
    }


    return Math.max(...res)
};