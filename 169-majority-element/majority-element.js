/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = {};
    for(let i=0; i<nums.length; i++){
        if(!freq[nums[i]]){
            freq[nums[i]] = 1;
        } else {
            freq[nums[i]]++;
        }
    }

    let majorElem = nums[0];
    for(let item of Object.keys(freq)){
        if(freq[item]>freq[majorElem]){
            majorElem = item;
        }
    }

    return Number(majorElem);
};