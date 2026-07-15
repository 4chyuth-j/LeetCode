/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function (n) {
    let sumOdd = oddSum(n);
    let sumEven = evenSum(n);
    let gcd = Math.min(sumOdd, sumEven);
    while (gcd > 1) {
        if (sumOdd % gcd == 0 && sumEven % gcd == 0) {
            return gcd;
        }
        gcd--;
    }

    return gcd;
};

function oddSum(n) {
    let sum = 0;
    let num = 1;
    while (n != 0) {
        sum += num;
        num += 2;
        n--;
    }

    return sum;
}

function evenSum(n) {
    let sum = 0;
    let num = 2;
    while (n != 0) {
        sum += num;
        num += 2;
        n--;
    }

    return sum;
}