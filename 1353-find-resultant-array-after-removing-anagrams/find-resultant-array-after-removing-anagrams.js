/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    
    if(words.length==0) return words;
    let result = [];
    let prevItem = ''

    for(let word of words){
        let item = word.split('').sort().join('');
        if(item!=prevItem){
            result.push(word);
            prevItem = item;
        }
    }

    return result;

};

