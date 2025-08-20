/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
   let start = 1;
   let end = arr.length-2;
   while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]>arr[mid-1] && arr[mid+1]<arr[mid]) return mid;
        else if(arr[mid-1]<arr[mid]){
            start = mid+1;
        } else if(arr[mid]>arr[mid+1]){
            end = mid-1;
        }
   }
};