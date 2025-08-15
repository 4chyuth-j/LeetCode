/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
    let start = 1;
    let end = arr.length-2;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid-1]< arr[mid] && arr[mid]> arr[mid+1]) return mid;
        else if(arr[mid-1]<arr[mid]) start = mid+1;
        else end = mid-1;
    }

    return -1;
};