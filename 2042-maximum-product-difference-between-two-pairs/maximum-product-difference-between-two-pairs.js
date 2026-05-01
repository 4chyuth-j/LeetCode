/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b)=>a-b);
    let l = nums.length-1;
    return (nums[l]*nums[l-1]) - (nums[0]*nums[1]);
};