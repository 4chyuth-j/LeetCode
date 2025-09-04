/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    //    if(nums.indexOf(target)>=0){
    //     return nums.indexOf(target);
    //    }
    //    else{
    //       nums.push(target);
    //       nums.sort((a,b)=>a-b);
    //       return nums.indexOf(target);


    //    }
    let res = nums.length
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start+end)/2);
        if(nums[mid]>=target){
            res = mid;
            end = mid-1
        } else {
            start = mid+1;
        }
        
    }

    return res;

};