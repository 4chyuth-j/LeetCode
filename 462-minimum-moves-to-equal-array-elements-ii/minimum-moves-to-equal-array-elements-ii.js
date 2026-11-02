/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    if(nums.length<=1) return 0;

    nums.sort((a,b)=>a-b);
    let median = nums[Math.floor(nums.length/2)];
    let steps = 0;
    for(let num of nums){
        steps +=Math.abs(num-median);
    }

    return steps;
};