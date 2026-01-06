/**
 * @param {number[]} arr
 * @param {number} target
 * @return {boolean}
 */
var search = function(arr, target) {
    let start = 0, end = arr.length-1;

    while(start<=end){
        let mid = Math.floor(start+(end-start)/2);
        if(arr[mid]===target) return true;
        if(arr[start]===arr[mid] && arr[mid]===arr[end]){
            start = start+1;
            end = end-1;
            continue;
        } else if(arr[mid]<=arr[end]){
            if(arr[mid]<target && target<=arr[end]){
                start = mid+1;
            } else {
                end = mid-1;
            }
        } else {
            if(arr[start]<=target && target<arr[mid]){
                end = mid-1;
            } else {
                start = mid+1;
            }
        }
    }

    return false;
    
};