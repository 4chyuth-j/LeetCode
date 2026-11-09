/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function(nums) {
    let swapCount = 0;
    let i=0,j=nums.length-1;
    
    while(i<j){
        while(i < j && nums[j]===0){
            j--;
        }

        if(nums[i]===0 && i < j){
            swapCount++;
            j--;
        }

        i++;
    }

    return swapCount;

};