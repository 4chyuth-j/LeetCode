/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let largeInd = -1, largeElem = -Infinity;

    for(let i=0; i<nums.length; i++){
        if(nums[i]>largeElem){
            largeElem = nums[i];
            largeInd = i;
        }
    }

    for(let i=0; i<nums.length; i++){
        if(i==largeInd) continue;

        if(nums[i]*2>largeElem){
            return -1;
        }
    }

    return largeInd;
};