/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
   let item = new Map();
   for(let i=0; i<nums.length; i++){
    let val= nums[i];
    if(item.has(val) && i-item.get(val)<=k){
        return true;
    }
    item.set(val,i);
   } 

   return false;
};