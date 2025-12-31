function numSubarraysWithSum(nums: number[], goal: number): number {
    return getSubArraysLessThanGoal(nums,goal)
        -  getSubArraysLessThanGoal(nums,goal-1);
};

function getSubArraysLessThanGoal(nums:number[],goal:number):number{
    if(goal<0) return 0;
    let sum:number = 0;
    let count:number = 0;
    let l:number = 0, r:number = 0;
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