/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let incLen = 1, decLen = 1;
    let i = 0;
    let incRef = 1,decRef = 1;
    while(i<nums.length-1){
        if(nums[i]<nums[i+1]){
            incRef++;
        } else {
            incLen = Math.max(incLen,incRef);
            incRef = 1;
        }

        if(nums[i]>nums[i+1]){
            decRef++;
        } else {
            decLen = Math.max(decRef,decLen);
            decRef = 1;
        }



        i++;
    }
    
    incLen = Math.max(incLen,incRef);
    decLen = Math.max(decRef,decLen);

    return Math.max(incLen, decLen);


};