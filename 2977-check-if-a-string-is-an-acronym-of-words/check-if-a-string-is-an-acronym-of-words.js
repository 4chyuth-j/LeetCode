/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let res = '';
    for(let w of words){
        res+=w[0];
    }

    return res===s;
};