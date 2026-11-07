/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function (n) {
    const calcDigitSum = (num) => {
        let sum = 0;
        while (num > 0) {
            let dig = num % 10;
            sum += dig;
            num = Math.floor(num / 10);
        }

        return sum;
    }

    const calcSquareSum = (num) => {
        let sum = 0;
        while (num > 0) {
            let dig = num % 10;
            sum += (dig * dig);
            num = Math.floor(num / 10);
        }

        return sum;
    }

    return calcSquareSum(n) - calcDigitSum(n) >=50;
};