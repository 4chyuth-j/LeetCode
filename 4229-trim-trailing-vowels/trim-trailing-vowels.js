/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function (s) {
    let size = s.length;

    while (/[aeiou]/.test(s[size - 1]) && size > 0) {
        size--;
    }

    return s.slice(0, size);
};