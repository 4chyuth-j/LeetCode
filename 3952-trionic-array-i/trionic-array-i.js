/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    let n = nums.length;
    let i = 0;

    //checking strictly increasing
    while(i+1<n && nums[i]<nums[i+1]) i++;

    if(i===0 || i===n-1) return false;

    let peak = i;

    //checking the second strictly decreasing
    while(i+1<n && nums[i]>nums[i+1]) i++;

    if(i===peak || i===n-1) return false;

    //checking wheather the remaining elements is increasing till the end
    while(i+1<n && nums[i]<nums[i+1]) i++;

    return i===n-1;
};