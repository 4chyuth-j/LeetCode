/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    const n = nums.length;
    nums.sort((a,b)=>a-b);
    let minAvg = (nums[0] + nums[n-1])/2;

    for(let i=1; i<n/2; i++){
        const avg = (nums[i] +nums[n-1-i])/2;
        minAvg = Math.min(minAvg,avg);
    }

    return minAvg;
};