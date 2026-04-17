/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if(nums.length<=2) return -1;

    nums.sort((a,b)=>a-b);

    const mid = Math.floor(nums.length/2);

    return nums[mid]
};