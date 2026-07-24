/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    const map = {};
    const ans = {};
    for(let word of words){
        let key = '';
        for(let i=1; i<word.length; i++){
            key+=`_${word[i].charCodeAt(0) - word[i-1].charCodeAt(0)}`;
        }

        map[key] = map[key]? map[key]+1 : 1;
        ans[key] = word;
    }

    for(let key in map){
        if(map[key]===1) return ans[key];
    }
};