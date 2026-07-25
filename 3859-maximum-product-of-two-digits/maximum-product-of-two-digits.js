/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {

    let large = -Infinity;
    let secondLarge = -Infinity;

    while (n > 0) {
        let num = n % 10;

        if (num >= large) {
            secondLarge = large;
            large = num
        } else if (num > secondLarge) {
            secondLarge = num;
        }
        
        n = Math.floor(n / 10);
    }

    return large * secondLarge;
};