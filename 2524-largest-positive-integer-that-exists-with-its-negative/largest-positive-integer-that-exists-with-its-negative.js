/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a,b)=>b-a);
    let i=0;
    while(nums[i]>0 && i<nums.length){
        if(nums.includes(-nums[i])){
            return nums[i];
        }
        i++;
    }
    return -1;
};