/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function(nums) {
    let seen = new Set();
    let second = new Set();
    let prev = null;
    let count = 0;
    for(let num of nums){
        if(seen.has(num) && prev!==num){
            if(!second.has(num)){
              count--;
              second.add(num);  
            }
        } else if(!seen.has(num)){
            count++;
            seen.add(num);
        }

        prev = num;
    }

    return count;
};