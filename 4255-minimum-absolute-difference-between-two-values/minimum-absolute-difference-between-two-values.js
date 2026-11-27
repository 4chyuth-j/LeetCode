/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function(nums) {
    let min = Infinity;
    let lastOne = -1;
    let lastTwo = -1;

    for(let i=0; i<nums.length; i++){
        if(nums[i]===1){
            lastOne = i;

            if(lastTwo!==-1){
                min = Math.min(min, i-lastTwo);
            }
        } else if(nums[i]===2){
            lastTwo = i ;
            if(lastOne!==-1){
                min = Math.min(min, i-lastOne);
            }
        }
    }

    return min ===Infinity? -1: min;
};