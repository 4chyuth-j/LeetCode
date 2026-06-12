/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return [
            findFirst(nums,target),
            findLast(nums,target)
            ];
};

function findFirst(arr,target){
    let start = 0, end = arr.length-1;
    let ans = -1;

    while(start<=end){
        const mid = Math.floor((start+end)/2);
        if(arr[mid]===target){
            ans = mid;
            end = mid-1;
        } else if(arr[mid]<target){
            start = mid+1;
        } else {
            end = mid-1;
        }
    }

    return ans;
}

function findLast(arr,target){
    let start = 0, end = arr.length-1;
    let ans = -1;

    while(start<=end){
        const mid = Math.floor((start+end)/2);
        if(arr[mid]===target){
            ans = mid;
            start = mid+1;
        } else if(arr[mid]<target){
            start = mid+1;
        } else {
            end = mid-1;
        }
    }

    return ans;
}