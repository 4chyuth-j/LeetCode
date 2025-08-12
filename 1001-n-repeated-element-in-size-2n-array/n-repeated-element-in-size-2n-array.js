/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let freq = new Set();
    for(let item of nums){
        if(freq.has(item)) return item;
        freq.add(item);
    }
    return -1;
};