/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let stack = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i]==1){
            stack.push(nums[i]);
            max = Math.max(max,stack.length);
        } else {
            stack = [];
        }
    }
    return max;
};