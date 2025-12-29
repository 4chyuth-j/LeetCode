/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    return getSubArraysLessThanGoal(nums,goal)-getSubArraysLessThanGoal(nums,goal-1);
};


function getSubArraysLessThanGoal(nums,goal){
    if(goal<0) return 0;
    let sum = 0;
    let count = 0;
    let l = 0, r = 0;
    while(r<nums.length){
        sum+=nums[r]
        while(sum>goal){
            sum-=nums[l];
            l++;
        }
        count+=(r-l+1);
        r++;
    }

    return count;
}