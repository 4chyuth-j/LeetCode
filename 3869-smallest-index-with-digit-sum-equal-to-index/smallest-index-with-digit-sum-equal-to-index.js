/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums[i]<10){
            if(i==nums[i]) return i;
        } else {
            let digit = nums[i];
            let sum = 0;
            while(digit>0){
                sum+=digit%10;
                digit = Math.floor(digit / 10);
            }
            if(sum==i) return i;
        }
    }

    return -1;
};