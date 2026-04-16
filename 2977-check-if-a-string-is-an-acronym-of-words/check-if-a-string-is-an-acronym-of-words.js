/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {

    if(words.length!=s.length) return false;

    let i = 0;

    for(let w of words){
        if(w[0]!=s[i++]){
            return false;
        }
    }

    return true;
};