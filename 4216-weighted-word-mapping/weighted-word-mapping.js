/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let str = '';
    for(let word of words){
        let sum=0;
        for(let i=0; i<word.length; i++){
            let ind = word[i].charCodeAt(0)-97;
            sum+=weights[ind];
        }
        let charCode = 122 - sum%26;
        str+=String.fromCharCode(charCode);
    }

    return str;
};