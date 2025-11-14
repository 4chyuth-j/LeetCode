function findShortestSubArray(nums: number[]): number {
    let map: Map<number, number> = new Map();
    for(let item of nums){
        map.set(item,(map.get(item)||0)+1);
    }
    let degree:number = Math.max(...map.values());
    let minLength:number = nums.length;

    for(let [key,val] of map){
        if(val === degree){
            let frst: number = nums.indexOf(key);
            let lst: number = nums.lastIndexOf(key);
            minLength = Math.min(minLength,lst-frst+1);
        }
    }

    return minLength;
};