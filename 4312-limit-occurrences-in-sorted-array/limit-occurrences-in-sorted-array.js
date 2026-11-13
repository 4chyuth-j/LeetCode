/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var limitOccurrences = function(nums, k) {
    let res = [];
    let set = new Set();
    let count = 1;
    for(let num of nums){
        if(!set.has(num)){
            set.add(num);
            count = 1;
        }
        if(count<=k){
            res.push(num);
        }

        count++;
    }

    return res;
};