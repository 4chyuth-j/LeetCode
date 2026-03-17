/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let ref = 1;
    let temp = [];
    let i = 0;
    while(temp.length!==k){
        if(arr[i]!=ref){
            temp.push(ref);
            ref++;
        } else {
            ref++;
            i++;
        }
    }

    return temp.pop();
};