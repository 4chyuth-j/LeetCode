/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {


    function reverseNum(num) {
        let rev = 0;
        while (num > 0) {
            let dig = num % 10;
            num = Math.floor(num / 10);
            rev = rev * 10 + dig;

        }

        return rev;
    }

    let reversed1 = reverseNum(num);
    let reversed2 = reverseNum(reversed1);

    return reversed2 === num;

};