/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {

    let res = Infinity;
    for(let i=0; i<nums.length; i++){

        if(nums[i]==target){
            let absVal = Math.abs(i-start);
            res = Math.min(res,absVal);
        }

    }

    return res;
    
};