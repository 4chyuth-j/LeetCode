/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let temp = [];
    let ref = 1;
    let i = 0
    while(temp.length!=k){
        if(ref!=arr[i]){
            temp.push(ref++)
        } else {
            ref++;
            i++;
        }
    }

    return temp.pop()
};