/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map();
    for(let c of s){
        map.set(c,(map.get(c) || 0)+1);
    }

   

    let hasOdd = false;
    let res = 0;
    for(let [key,val] of map){
        if(val%2===0){
            res+=val;
        } else {
            res+=val-1;
            hasOdd = true;
        }
    }

    return hasOdd?res+1:res;
};