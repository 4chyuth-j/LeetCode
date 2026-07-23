/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const words = sentence.split(" ");
    const n = words.length-1;
    for(let i=0; i<=n; i++){
        const word = words[i];
        const nextWord = i==n? words[0]:words[i+1];
        if(word[word.length-1]!=nextWord[0]) return false;
    }

    return true;
};