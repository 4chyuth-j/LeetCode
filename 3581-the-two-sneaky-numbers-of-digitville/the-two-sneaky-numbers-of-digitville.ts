function getSneakyNumbers(nums: number[]): number[] {
    let freqSet = new Set();
    let res = [];
    for(let i=0; i<nums.length; i++){
        if(freqSet.has(nums[i])){
            res.push(nums[i]);
        } else {
            freqSet.add(nums[i]);
        }
    }

    return res;
    
};