/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let totalSum = nums.reduce((acc,curr)=>acc+curr,0);
    let leftSum = 0,rightSum= totalSum;
    let res = [];
    for(let num of nums){
        rightSum-=num;
        res.push(Math.abs(leftSum-rightSum));
        leftSum+=num;
    }

    return res;
};