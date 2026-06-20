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
var mergeNodes = function(head) {
    let arr = [];
    let curr=  head.next;
    let sum = 0;
    while(curr){
        if(curr.val==0){
            arr.push(sum);
            sum=0;
        }
        sum +=curr.val;
        curr= curr.next;
    }

    let newHead = new ListNode();

    curr = newHead;

    for(let i=0; i<arr.length; i++){
        curr.val = arr[i];
        if(arr[i+1]){
           curr.next = new ListNode();
        }
        curr = curr.next;
    }

    return newHead;


};