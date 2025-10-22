/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxlen = 0;
    let zeroCount = 0;
    let l=0, r=0;
    let len = nums.length;
    while(r<len){
        if(nums[r]==0){
            zeroCount++
        }
        if(zeroCount<=k){
            maxlen = Math.max(maxlen,r-l+1);
        } else {
            while(zeroCount>k){
                if(nums[l]==0){
                  zeroCount--;
                }
                l++;
            }
        }

        r++;
    }
    
    return maxlen;

};