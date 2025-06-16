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
var middleNode = function(head) {
    let length = getSize(head);
    let mid = Math.floor(length/2)+1;
    let pos = 1;
    while(pos<mid){
        head = head.next;
        pos++;
    }
    return head;
};

function getSize(head){
    let len = 0;
    let curr = head;
    while(head){
        len++;
        head = head.next;
    }

    return len;
}