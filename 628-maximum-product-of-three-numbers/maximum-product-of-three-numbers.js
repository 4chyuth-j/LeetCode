/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    let n = nums.length;
    
    let prod1 = nums[n-1]*nums[n-2]*nums[n-3];
    let prod2 = nums[0]*nums[1]*nums[n-1];

    return Math.max(prod1,prod2);
};