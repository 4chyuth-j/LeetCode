/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
    let arr = [];
    while (num > 0) {
        arr.push(num % 10);
        num = Math.floor(num / 10);
    }

    arr.sort((a, b) => a - b);
    console.log(arr);
    let num1 = arr[0] * 10 + arr[2];
    let num2 = arr[1] * 10 + arr[3];
    return num1+num2;
};