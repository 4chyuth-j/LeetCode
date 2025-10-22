/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxlen = 0;
    // let zeroCount = 0;
    // let l=0, r=0;
    let len = nums.length;
    for(let i=0; i<len; i++){
        let zeroes = 0;
        for(let j=i; j<len; j++){
            if(nums[j]==0){
                zeroes++;
            }

            if(zeroes<=k){
                maxlen = Math.max(maxlen, j-i+1);
            } else {
                break;
            }

        }
    }
    
    return maxlen;

};