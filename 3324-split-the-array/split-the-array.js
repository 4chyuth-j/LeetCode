/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let freq = {};
    for(let num of nums){
        if(freq[num]){
            freq[num]++
        } else {
            freq[num] = 1;
        }
    }

    for(let val of Object.values(freq)){
        if(val>2) return false
    }

    return true;
};