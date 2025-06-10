/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // let start = 0;
    // let end = nums.length-1;
    // while(start<=end){
    //     mid = Math.floor((start+end)/2);
    //     if(nums[mid]==target){
    //         return mid;
    //     }
    //     if(nums[mid]>target){
    //         end = mid-1;
    //     } else {
    //         start = mid+1;
    //     }
    // }

    // return -1;

    function findelem(nums,target,start,end){
        if(start>end) return -1;
        let mid = Math.floor((start+end)/2);
        if(nums[mid]==target){
            return mid;
        } else if(nums[mid]>target){
            end = mid-1;
            return findelem(nums,target,start,end);
        } else {
            start = mid+1;
            return findelem(nums,target,start,end);
        }
   
    }

    return findelem(nums,target,0,nums.length-1);


};