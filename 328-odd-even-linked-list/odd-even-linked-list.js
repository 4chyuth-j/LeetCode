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
var oddEvenList = function(head) {
    if(!head || !head.next) return head;

    let oddEnd = head;
    let even = head.next;
    let evenEnd = even;
    while(evenEnd!=null && evenEnd.next!=null){
        oddEnd.next = oddEnd.next.next;
        oddEnd = oddEnd.next;

        evenEnd.next = evenEnd.next.next;
        evenEnd = evenEnd.next;
    }

    oddEnd.next = even
    return head;
};