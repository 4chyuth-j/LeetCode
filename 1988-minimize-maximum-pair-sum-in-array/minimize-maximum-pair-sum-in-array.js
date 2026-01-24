/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let res = 0;
    let start = 0, end = nums.length-1;
    while(start<end){
        res = Math.max(res,nums[start]+nums[end]);
        start++;
        end--;
    }

    return res;
};