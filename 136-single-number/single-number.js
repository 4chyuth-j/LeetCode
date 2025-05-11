/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let flag = 0;
    for(let i=0; i<nums.length; i++){
        flag=0;
        for(let j=0; j<nums.length; j++){
            if(i==j){
                continue;
            }
            if(nums[i]==nums[j]){
                flag++;
            }
        }

        if(flag==0){
            return nums[i];
        }
    }
};