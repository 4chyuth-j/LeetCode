/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (arr) {
    if (arr.length == 1) return arr[0];
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (mid == 0 && arr[mid] != arr[1]) {
            return arr[mid];
        }
        if (mid == arr.length - 1 && arr[mid] != arr[mid - 1]) {
            return arr[mid];
        }
        if (arr[mid] != arr[mid - 1] && arr[mid] != arr[mid + 1]) return arr[mid];
        if (mid % 2 === 0) {
            if (arr[mid] == arr[mid - 1]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (arr[mid] == arr[mid - 1]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
};