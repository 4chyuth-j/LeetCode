/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var limitOccurrences = function(nums, k) {
    let res = [];
    let last = null;
    let count = 1;
    for(let num of nums){
        if(last!=num){
            last = num;
            count = 1;
        }
        if(count<=k){
            res.push(num);
        }

        count++;
    }

    return res;
};