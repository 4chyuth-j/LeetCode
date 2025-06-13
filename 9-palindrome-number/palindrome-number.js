/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
//     let flag=0;
//    let testvar1=String(x);
//    let size=testvar1.length;


//     for(let i=0; i<size/2; i++){
//         if(testvar1[i]!=testvar1[size-i-1]){
          
//           flag++;
//           break;
           
//         }
//     }

//     if(flag!=0){
//         return  false;
//     }else{
//         return true;
//     }

let item = String(x);
let start = 0;
let end = item.length-1;
while(start<end){
    if(item[start]===item[end]){
        start++;
        end--;
    } else {
        return false
    }
}
return true;

};