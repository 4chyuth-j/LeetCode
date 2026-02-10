/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    let count = 0;
    for(let i=0; i<nums.length; i++){
        let odd = new Set();
        let even = new Set();
        for(let j=i; j<nums.length; j++){
            if(nums[j]%2==0){
                even.add(nums[j]);
            } else {
                odd.add(nums[j]);
            }
            

            if(odd.size === even.size) count = Math.max(count,j-i+1);
        }
    }

    return count;

};