/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    let prev1 = nums[0];
    let prev2 = Math.max(nums[0],nums[1]);

    for(let i=2; i<n; i++){
        [prev1,prev2] = [prev2, Math.max(prev2,nums[i]+prev1)];
    }

    return prev2?prev2:prev1;
};