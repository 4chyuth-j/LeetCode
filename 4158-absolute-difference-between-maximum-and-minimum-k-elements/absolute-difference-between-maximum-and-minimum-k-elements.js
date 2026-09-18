/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    let largeSum = 0, smallSum = 0;
    nums.sort((a,b)=>b-a);
    
    for(let i=0; i<k; i++){
        largeSum+=nums[i];
    }

    let i = nums.length-1;
    while(k>0){
        smallSum += nums[i--];
        k--;
    }

    return Math.abs(largeSum-smallSum);
};