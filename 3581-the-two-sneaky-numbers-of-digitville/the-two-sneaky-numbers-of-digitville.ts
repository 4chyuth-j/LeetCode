function getSneakyNumbers(nums: number[]): number[] {
    let freqMap = new Map();
    for(let i=0; i<nums.length; i++){
        freqMap.set(nums[i],(freqMap.get(nums[i])||0)+1);
    }
    let res = [];

    for(let [key,val] of freqMap){
        if(val>=2){
            res.push(key);
            if(res.length==2) return res;
        }
    }
};