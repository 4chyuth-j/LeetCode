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
    let l1 = 0,l2=0;
    let dum = headA;
    while(dum){
        l1++;
        dum = dum.next;
    }

    dum = headB;
    while(dum){
        l2++;
        dum = dum.next;
    }

    if(l1<l2){
        return collisionPoint(headA,headB,l2-l1);
    } else {
        return collisionPoint(headB,headA,l1-l2);
    }
};


function collisionPoint(t1,t2,d){
    while(d){
        d--;
        t2 = t2.next;
    }
    while(t1!=t2){
        t1 = t1.next;
        t2 = t2.next;
    }

    return t1;
}