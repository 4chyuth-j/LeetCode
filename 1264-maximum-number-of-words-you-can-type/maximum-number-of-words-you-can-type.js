/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let out = 0;
    let regex = new RegExp(`[${brokenLetters}]`,'i')
    let textArr = text.split(" ");
    for(let i=0; i<textArr.length; i++){
       if(!regex.test(textArr[i])){
        out++;
       }
    }
    return out;
};


