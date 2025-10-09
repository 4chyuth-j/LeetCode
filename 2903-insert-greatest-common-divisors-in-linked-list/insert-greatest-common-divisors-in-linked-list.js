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
var insertGreatestCommonDivisors = function(head) {
    if(head.next==null) return head;

    let node = head;
    while(node.next){
        let curr = node;
        let next = node.next;
        let dum = new ListNode( highestDivisor(curr.val,next.val), next );

        curr.next = dum;
        node = node.next.next;

    }

    return head;
};

function highestDivisor(n1,n2){
    let min = Math.min(n1,n2);
    while(min>0){
        if(n1%min==0 && n2%min==0) return min

        min--;
    }
}