/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let count = 0;
    for(let i=left; i<=right; i++){
        let word = words[i];
        if(/^[aeiou]/.test(word) && /[aeiou]$/.test(word)) count++;
    }

    return count;
};