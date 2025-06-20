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
 if(head == null || head.next == null)return null;

    let slow = head;
    let fast = head;
    let dummy = null;

    while(fast !== null && fast.next !== null)
    {
        dummy = slow;
        slow = slow.next;
        fast = fast.next.next;

    }
    dummy.next = slow.next;
    return head;  

};