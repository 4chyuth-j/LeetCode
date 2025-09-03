/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = 0;
    let start = 0, end = nums.length-1;
    while(start<=end){
        if(start==end){
            sum+=nums[start];
        }else{
            sum+=nums[start];
            sum+=nums[end];
        }

        start++;
        end--;

    }

    return sum%k;
};