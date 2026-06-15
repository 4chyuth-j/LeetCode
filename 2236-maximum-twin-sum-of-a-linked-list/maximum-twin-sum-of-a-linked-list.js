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
   
    let res = [];
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        res.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    let max = 0
    
    while(slow){
        max = Math.max(max, res.pop()+slow.val);
        slow = slow.next;
    }


    return max;
};