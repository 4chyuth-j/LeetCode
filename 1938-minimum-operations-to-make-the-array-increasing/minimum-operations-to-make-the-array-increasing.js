/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {

    if(nums.length==1) return 0;

    let res =0;
    for(let i=0; i<nums.length-1; i++){
        if(nums[i]>=nums[i+1]){
            res +=nums[i]-nums[i+1]+1;
            nums[i+1] = nums[i]+1;
        }
    }
    return res;
};