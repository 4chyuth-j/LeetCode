/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = new Map();
    for(let item of nums){
        map.set(item,(map.get(item)||0)+1);
    }
    let degree = Math.max(...map.values());
    let minLength = nums.length;

    for(let [key,val] of map){
        if(val === degree){
            let frst = nums.indexOf(key);
            let lst = nums.lastIndexOf(key);
            minLength = Math.min(minLength,lst-frst+1);
        }
    }

    return minLength;
   
};