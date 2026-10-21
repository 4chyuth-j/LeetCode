/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    let p1 = nums[0];
    let p2 = Math.max(nums[0],nums[1]);
    for(let i=2; i<n; i++){
        const current = Math.max(p2,p1+nums[i]);
        p1 = p2;
        p2 = current;
    }

    return p2?p2:p1;
};