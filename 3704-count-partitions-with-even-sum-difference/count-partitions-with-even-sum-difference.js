/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let sum = nums.reduce((a,b)=>a+b,0);

    if(sum%2!==0) return 0;

    return nums.length-1;

};