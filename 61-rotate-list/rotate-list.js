/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    if(!head || head.next == null || k==0) return head;

    let temp = head;

    let n = 1

    while(temp.next){
        temp = temp.next;
        n++;
    }

    temp.next = head;

    k = k%n;

    let size = n - k - 1;

    let newTail = head;

    while(size-- > 0){
        newTail = newTail.next;
    }

    let newHead = newTail.next;
    newTail.next = null;

    return newHead;

};

