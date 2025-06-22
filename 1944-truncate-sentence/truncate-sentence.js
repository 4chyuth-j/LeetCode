/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    // let str = s.split(" ");
    // newStr=str.slice(0,k);
    // newStr = newStr.join(" ");
    // return newStr;

    let str = s.split(" ").slice(0,k).join(" ");
    return str;

};