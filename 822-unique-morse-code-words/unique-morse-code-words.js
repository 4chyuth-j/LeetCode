/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

    let wordMorse = new Set();

    for(let item of words){
        let word = '';
        for(let i=0; i<item.length; i++){
            word+=morse[item[i].charCodeAt(0)-97];
        }
        wordMorse.add(word);
    }

   
    return wordMorse.size
};