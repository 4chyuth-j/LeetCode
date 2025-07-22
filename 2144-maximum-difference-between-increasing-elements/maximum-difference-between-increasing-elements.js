/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    minNum = Infinity;
    maxDiff = -1;
    for(let num of nums){
        if(num<=minNum){
            minNum = num;
        } else {
            maxDiff = Math.max(maxDiff,num-minNum);
        }
    }
    return maxDiff;
};