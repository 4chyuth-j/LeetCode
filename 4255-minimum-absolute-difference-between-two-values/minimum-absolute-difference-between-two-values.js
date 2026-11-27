/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function(nums) {
    let min = Infinity;
    for(let i=0; i<nums.length; i++){
        if(nums[i]===1){
            for(let j=0; j<nums.length; j++){
                if(nums[j]===2){
                    min = Math.min(Math.abs(i-j),min);
                }
            }
        }
    }

    return min ===Infinity? -1: min;
};