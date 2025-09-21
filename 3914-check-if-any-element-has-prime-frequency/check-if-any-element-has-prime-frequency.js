/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function (nums) {
    let freq = new Map();
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    console.log(freq);

    for (let key of freq.keys()) {
        if (isPrime(freq.get(key))) {
            return true;
        }
    }

    return false;
};

function isPrime(num) {
    if(num<=1) return false
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) return false;
    }

    return true;
}