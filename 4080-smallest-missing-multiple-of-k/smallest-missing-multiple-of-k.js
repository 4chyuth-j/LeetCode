/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let len = nums.length;
    let freq = {};
    for(let i=1; i<=len+1; i++){
        freq[k*i] = 0;
    }

    for(let i=0; i<len; i++){
        if(nums[i]%k===0) {
            freq[nums[i]]++
        }
    }

    for(let key in freq){
        if(freq[key]===0) return Number(key);
    }
};