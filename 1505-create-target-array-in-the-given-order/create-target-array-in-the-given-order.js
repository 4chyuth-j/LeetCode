/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];

    for(let i=0; i<nums.length; i++){
        let ind = index[i];
        let elem = nums[i];

        target.splice(ind,0,elem);
    }

    return target;
};