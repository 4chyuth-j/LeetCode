/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
   for(let i=0; i<nums.length-1; i++){
       if(nums[i]==nums[i+1]){
            nums[i]*=2;
            nums[i+1]=0;
       }
   } 


    let j=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]!=0 && nums[j]==0){
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
        if(nums[j]!=0) j++;
    }

   return nums;
};

