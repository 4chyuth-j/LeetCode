/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let positive = 0;
    let negative = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]<0){
            negative++;
        } else if(nums[i]>0){
            positive++;
        }
    }

    return positive>negative? positive : negative;
};