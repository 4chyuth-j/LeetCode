/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let set = new Set(nums);
    let min = Infinity, max = -Infinity;
    for(let n of nums){

        if(n<min) min = n;
        if(n>max) max = n;

    }

    let i = min;
    let res = [];

    while(i<=max){
        if(!set.has(i)){
          res.push(i)
        }
        i++;
    }

    return res;

};