/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let isInc = false;
    let isDec = false;
    for(let i=0; i<nums.length-1;i++){
        if(isInc && isDec) return false;
        if(nums[i]<nums[i+1]){
            isInc = true;
            continue;
        } else if(nums[i]>nums[i+1]){
            isDec = true;
            continue;
        }
    }

    return isInc && isDec? false : true;
};