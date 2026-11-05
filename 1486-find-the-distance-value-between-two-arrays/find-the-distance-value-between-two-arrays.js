/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;
    let n = arr2.length;
    for(let num1 of arr1){
        let flag = 0;
        for(let num2 of arr2){
            if(Math.abs(num1-num2)>d){
                flag++;
            } else {
                break;
            }
        }

        if(flag==n) count++;
    }

    return count;
};