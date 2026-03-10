/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let val = nums.reduce((acc,curr)=>acc*curr,1);
    if(val>0) return 1
    else if(val<0) return -1
    else return 0
};