/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head.next == null && n ==1){
        head = null
        return head
    }
    let slow = head;
    let fast = head;
    while(n>0){
        fast = fast.next;
        n--;
    }

    if(fast==null){
        head = head.next;
        return head;
    }

    while(fast!=null && fast.next!=null){
        slow = slow.next;
        fast = fast.next;
    }

    if(slow.next) slow.next = slow.next.next;
    return head;
};