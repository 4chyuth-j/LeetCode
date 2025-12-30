/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    
    return countSubArrays(nums,k)
         - countSubArrays(nums,k-1);
};

function countSubArrays(nums,k){
    if(k<0) return 0;
    let l=0,r=0;
    let sum = 0;
    let count = 0;

    while(r<nums.length){
        sum +=nums[r]%2;

        while(sum>k){
            sum -= nums[l]%2;
            l++;
        }

        count+=(r-l+1);
        r++;
    }

    return count;
}