/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
    let ans = [];
    for (let num of nums) {
        seperate(num);
    }

    function seperate(num) {
        let rev = [];
        while (num > 0) {
            let dig = num % 10;
            num = Math.floor(num / 10);
            rev.push(dig);
        }

        while (rev.length != 0) {
            ans.push(rev.pop());
        }
    }

    return ans;
};