function arrayPairSum(nums: number[]): number {
    nums.sort((a,b)=>(a-b));
    let maxSum:number = null;
    for(let i=0; i<nums.length; i+=2){
        maxSum+=nums[i];
    }
    return maxSum;
};