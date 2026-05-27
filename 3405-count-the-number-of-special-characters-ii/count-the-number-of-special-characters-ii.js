/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let count =0;
    for(let i=0; i<26; i++){
        let char = String.fromCharCode(i+97);
        let upper = char.toUpperCase();

        let lowerIndex = word.lastIndexOf(char);
        let upperIndex = word.indexOf(upper);

        if(lowerIndex!=-1 &&
           upperIndex!=-1 &&
           lowerIndex<upperIndex ){
            count++;
        }
    }

    return count;
};