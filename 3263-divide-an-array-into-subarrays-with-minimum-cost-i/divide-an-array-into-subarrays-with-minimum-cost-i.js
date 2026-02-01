/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    // if(nums.length==3) return nums[0]+nums[1]+nums[2]
    // let first = nums[0];
    // nums.sort((a,b)=>a-b);
    // console.log(nums);
    // if(nums[0]!=first){
    //     return first +nums[0]+nums[1];
    // } else {
    //     return nums[0]+nums[1]+nums[2];
    // }

    let arr = nums.slice(1).sort((a,b)=>a-b);
    console.log(arr);

    return nums[0]+arr[0]+arr[1];
};