/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let l=0,r=0;
    let maxCount = 0;
    let len = nums.length;
    while(r<len){

        if(nums[r]==0){
            l = r+1;
        }

        if(nums[r]==1){
            maxCount = Math.max(maxCount,r-l+1);
        }
        r++;
    }

    return maxCount;
};