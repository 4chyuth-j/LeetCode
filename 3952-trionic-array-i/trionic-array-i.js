/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    if(nums.length==3) return false;
    let flag = 0;
    let inc = true;
    let prev = nums[0]
    for(let i=1; i<nums.length; i++){
        if(nums[i]>prev && inc){
            prev = nums[i];
            if(i<nums.length-1 && nums[i]>nums[i+1]){
                inc = !inc;
                flag++;
            }
        } else if(nums[i]<prev && !inc){
            prev = nums[i];
            if(i<nums.length-1 && nums[i]<nums[i+1]){
                inc = !inc;
                flag++;
            }
        } else {
            return false;
        }
    }

    return flag==2;
};