/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    // let elem ='';
    // while(head!=null){
    //     elem+=`${head.val}`;
    //     head = head.next;
    // }

    // let decimal = 0;
    // for(let i=0; i<elem.length; i++){
    //     decimal = decimal *2 + Number(elem[i]);
    // }
    // return decimal;

    let decimal =0;
    while(head){
        decimal = decimal*2 + head.val;
        head = head.next;
    }
    return decimal;
};