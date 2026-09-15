/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    nums.sort((a,b)=>b-a);
    let i=0;
    let res = [];
    let last = 0;
    while(i<nums.length && k>0){
        if(last!==nums[i]){
            last = nums[i]
            res.push(nums[i])
            k--;
        }
        i++;
    }

    return res;
};