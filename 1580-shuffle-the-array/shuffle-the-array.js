/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let result = [];
    let i = n;
    while(i<2*n){
        result.push(nums[i-n]);
        result.push(nums[i]);
        i++;
    }
    return result;
};