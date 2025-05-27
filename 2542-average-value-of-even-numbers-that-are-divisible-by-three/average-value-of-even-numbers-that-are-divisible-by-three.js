/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0;
    let count = 0;

    for(let j=0; j<nums.length; j++){
        if(nums[j]%3 ===0 && nums[j]%2 ===0){
            count++;
            sum +=nums[j];
        }
    }
 
    return count>0? Math.floor(sum/count) : 0;

};