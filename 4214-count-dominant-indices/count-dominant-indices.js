/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function(nums) {
    const n = nums.length;
    let sum = 0;
    let count = 0;
    for(let i=n-2; i>=0; i--){
        sum+=nums[i+1];
        const avg = sum / (n-i-1);
        if(nums[i]>avg) count++;
    }

    return count;
};