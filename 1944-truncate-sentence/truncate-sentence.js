/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let str = s.split(" ");
    newStr=str.slice(0,k);
    newStr = newStr.join(" ");
    return newStr;
};