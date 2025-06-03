/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    let arr = [];
    for(let i=0; i<nums.length; i++){
        let prefix = new Set(nums.slice(0,i+1));
        let sufix  = new Set(nums.slice(i+1));
        arr.push(prefix.size-sufix.size);
    }
    console.log(arr);
    return arr;
};