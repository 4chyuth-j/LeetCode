/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
    let n = nums.length;
    let breakpoint = -1;

    for(let i=0; i<n-1; i++){
        if(nums[i]>nums[i+1]){
            if(breakpoint!==-1){
                return -1;
            }
            breakpoint = i;
        }
    }

    if(breakpoint==-1) return 0;

    if(nums[n-1]>nums[0]) return -1;

    return n - breakpoint - 1;


};