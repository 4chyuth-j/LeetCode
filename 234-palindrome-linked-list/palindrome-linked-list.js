/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    let dum = head;
    while(dum){
        arr.push(dum.val);
        dum = dum.next;
    }

    let start = 0, end = arr.length-1;

    while(start<end){
        if(arr[start]!=arr[end]) return false;

        start++;
        end--;
    }

    return true;
};