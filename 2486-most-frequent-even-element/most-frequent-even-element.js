/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let freq = new Map();
    for(let num of nums){
        if(num%2===0){
            freq.set(num,(freq.get(num)||0)+1);
        }
    }

    let res = {key:-1,val:0};
    
    for(let [key,val] of freq){
        if(res.val<val){
            res.val = val;
            res.key = key;
        } else if(res.val===val && res.key>key){
            res.key = key;
        }
    }

    return res.key
};