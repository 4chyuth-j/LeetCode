/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    const reversed = s.slice(0, k).split('').reverse().join('');
    return reversed + s.slice(k);
};