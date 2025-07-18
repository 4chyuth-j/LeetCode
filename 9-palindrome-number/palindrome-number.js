/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
// let item = String(x);
// let start = 0;
// let end = item.length-1;
// while(start<end){
//     if(item[start]===item[end]){
//         start++;
//         end--;
//     } else {
//         return false
//     }
// }
// return true;

let rev = 0;
let n = x;
while(n>0){
    rev = rev*10 + n%10;
    n = Math.floor(n/10);
} 

console.log(rev);
if(rev==x){
    return true;
} else {
    return false;
}

};