/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {

    let res = Infinity;
    let n = nums.length;
    for(let i=0; i<n; i++){

        if(nums[i]==target){
            let absVal = Math.abs(i-start);
            res = Math.min(res,absVal);
            if(absVal === 0) return 0;
        }

    }

    return res;
    
};