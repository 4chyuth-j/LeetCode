/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
   nums.sort((a,b)=>a-b);
   let sum = 0;
   let s = nums.length-1;
   while(k>0){
      sum+=nums[s];
      nums[s]=nums[s]+1;  
      k--;   
   }

   return sum;
};