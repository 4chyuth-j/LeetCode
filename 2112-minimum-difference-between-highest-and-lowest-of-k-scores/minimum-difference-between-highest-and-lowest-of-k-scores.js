/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(k==1) return 0;

    nums.sort((a,b)=>a-b);
    let start = 0,end = k-1;
    let min = Infinity;
    while(end<nums.length){
        min = Math.min(min,nums[end]-nums[start]);
        start++;
        end++;
    }

    return min;
    
};