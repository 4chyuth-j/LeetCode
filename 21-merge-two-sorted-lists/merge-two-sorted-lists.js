/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(h1, h2) {
    let dum = new ListNode(-1);
    let curr = dum;

    while(h1 && h2){
        if(h1.val<h2.val){
            curr.next = h1;
            curr = h1;
            h1 = h1.next;
        } else {
            curr.next = h2;
            curr = h2;
            h2 = h2.next;
        }
    }

    if(h1) curr.next = h1;
    if(h2) curr.next = h2;

    return dum.next;
};