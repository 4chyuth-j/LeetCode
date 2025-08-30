/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
let sum = 0;
let dum = [...nums];
for(let i=0; i<nums.length; i++){
    nums[i]+=sum;
    sum+=dum[i];
}   
return nums; 
};