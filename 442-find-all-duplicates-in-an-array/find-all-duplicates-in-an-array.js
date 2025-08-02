/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

    let freq = new Map();
    for(let item of nums){
        freq.set(item,(freq.get(item)||0)+1);
    }
    for(let [key,value] of freq){
        if(value==1){
            freq.delete(key);
        }
    }

    return [...freq.keys()];
    
};