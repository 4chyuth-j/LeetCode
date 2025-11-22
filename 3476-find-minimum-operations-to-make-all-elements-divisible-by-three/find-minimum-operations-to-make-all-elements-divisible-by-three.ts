function minimumOperations(nums: number[]): number {
    let steps:number = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]%3!=0){
            steps++;
        }
    }

    return steps;
};