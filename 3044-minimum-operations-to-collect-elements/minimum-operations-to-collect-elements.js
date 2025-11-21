/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
   let flag = new Set();

   for(let i=1; i<=k; i++){
        flag.add(i);
   }

   let res = 0;

   while(flag.size){
        let el = nums.pop();
        if(flag.has(el)){
            flag.delete(el);
        }
        res++;
   }

   return res;
};