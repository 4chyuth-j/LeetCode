/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function(nums) {
    let freq = new Array(101).fill(0);
    for(let num of nums){
        if(num%2==0){
            freq[num]+=1;
        }
    }

    for(let num of nums){
        if(num%2==0 && freq[num]==1) return num;
    }

    return -1;
};