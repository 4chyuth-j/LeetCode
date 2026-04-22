/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {

    if(num<10) return true;

    let dig = num%10;

    return dig===0? false: true;

};