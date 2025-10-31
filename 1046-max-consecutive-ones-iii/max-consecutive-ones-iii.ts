function longestOnes(nums: number[], k: number): number {
    let r:number = 0;
    let l:number = 0;
    let zero:number = 0;
    let max:number = 0;
    while(r<nums.length){
        if(nums[r]==0){
            zero++;
        }

        while(zero>k){
            if(nums[l]==0){
                zero--;
            }
            l++;
        }

        max = Math.max(max, r-l+1);
        r++;
    }

    return max;
};