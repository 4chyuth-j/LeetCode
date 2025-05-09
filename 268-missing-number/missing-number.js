/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arr = [];
    for(let i=0; i<=nums.length; i++){
        arr[i] =i;
    }

    for(let i=0; i<arr.length; i++){
        if(!nums.includes(arr[i])){
            return arr[i];
        }
    }

    
};