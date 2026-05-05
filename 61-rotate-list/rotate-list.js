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
    let arr = [];

    let temp = head;

    while(temp){
        arr.push(temp.val);
        temp = temp.next;
    }

    k = k%arr.length;

    while(k>0){
        let elem = arr.pop();
        arr.unshift(elem);
        k--;
    }

    let curr = head;
    for(let i=0; i<arr.length; i++){
        curr.val = arr[i];
        curr = curr.next;
    }

    return head;

};