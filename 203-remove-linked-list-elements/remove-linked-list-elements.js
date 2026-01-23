/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head == null) return head
    
    while(head && head.val == val){
        head = head.next
    }

    let prev = null;
    let curr = head;

    while(curr){
        
        if(curr.val == val){
            prev.next = curr.next;
            curr = prev.next;
        } else {
            prev = curr;
            curr = curr.next
        }
        
    }

    return head;
    
};