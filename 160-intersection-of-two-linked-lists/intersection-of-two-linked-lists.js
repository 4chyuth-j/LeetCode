/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    let dum = headA;

    while(dum){
        set.add(dum);
        dum = dum.next;
    }

    console.log(Set);

    dum = headB;

    while(dum){
        if(set.has(dum)){
            return dum;
        }

        dum = dum.next;
    }

    return null;
};