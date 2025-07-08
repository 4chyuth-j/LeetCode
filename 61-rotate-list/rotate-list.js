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
    if(head==null || head.next==null || k==0) return head;
    let length = 0;
    let curr = head;
    while(curr){
        length++;
        curr = curr.next;
    }

    k = k%length;
    if(k==0) return head;

    for(let i=1; i<=k; i++){
        let headOld = head;
        let last = headOld;
        while(last.next.next!=null){
            last = last.next;
        }

        let rotateElem = last.next;
        last.next = null;
        rotateElem.next = head;
        head = rotateElem;
    }
    return head;
};