function findMaxConsecutiveOnes(nums: number[]): number {
    let l:number = 0;
    let r:number = 0;
    let max:number = 0;
    while(r<nums.length){
        if(nums[r]==0){
           l = r+1;
        } else {
             max = Math.max(max,r-l+1);
        }

        r++;
    }
    return max;
};