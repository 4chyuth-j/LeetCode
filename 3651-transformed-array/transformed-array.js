/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    let res = [];
    let n = nums.length;
    for(let i=0; i<n; i++){
        res.push(nums[((i+nums[i])%n + n)%n]);
    }

    return res;
};