/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
    let nums = [];
    while (n > 0) {
        let num = n % 10;
        nums.push(num);
        n = Math.floor(n / 10);
    }
    let large = -Infinity;
    let secondLarge = -Infinity;
    for(let num of nums){
        if(num>=large){
            secondLarge = large;
            large = num
        } else if(num>secondLarge){
            secondLarge = num;
        }
    }

    return large*secondLarge;
};