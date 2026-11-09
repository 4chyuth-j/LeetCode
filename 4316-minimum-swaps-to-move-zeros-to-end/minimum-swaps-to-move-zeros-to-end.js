/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function(nums) {
    let zeroCount = 0;
    let swapCount = 0;

    for(let num of nums){
        if(num===0){
            zeroCount++;
        }
    }

    let i = nums.length-1;

    while(zeroCount>0){
        if(nums[i]!==0){
            swapCount++;
        } 

        zeroCount--;
        i--;
    }

    return swapCount;

};