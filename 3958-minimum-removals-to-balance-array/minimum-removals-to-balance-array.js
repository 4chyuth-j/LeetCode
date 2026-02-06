/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    if(nums.length<=1) return 0;
    nums.sort((a,b)=>a-b);
    let n = nums.length;
    let i=0,j=0;
    let min = n;
    for(let i=0; i<n; i++){
        while(j<n && nums[i]*k>=nums[j]){
            j++;
        }

        min = Math.min(min,i+n-j);
    }

    return min;
};