/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let sorted = [...nums].sort((a,b)=>a-b);
    return nums.map(num=>sorted.indexOf(num));

};