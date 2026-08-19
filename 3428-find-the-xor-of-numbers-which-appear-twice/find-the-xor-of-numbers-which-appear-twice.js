/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    let freq = new Map();
    for(let num of nums){
        freq.set(num,(freq.get(num)||0)+1);
    }

    let res = 0;
    for(let [key,val] of freq){
        if(val==2){
          res^=key;
        }
    }

    return res;
};