/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(head.next == null){
        head = null;
        return head;
    }

    let slow = head;
    let fast = head;
    let prev = null;
    while(fast!=null && fast.next!=null){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = prev.next.next;
    slow.next = null; // remove
    return head;
     

};