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
var reverseList = function(head) {
    if(head==null || head.next==null  ) return head;
    let prev = null;
    let curr = head;
    while(curr.next!=null){
        let next = curr.next;
        curr.next = prev;
        prev= curr;
        curr= next;
    }

    curr.next = prev;
    head = curr;
    return head;
};