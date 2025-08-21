/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let map = new Map();
    let word = new Map();
    let res = 0;
    for(let char of chars){
        map.set(char,(map.get(char)||0)+1 );
    }
    outter:for(let item of words){
        word.clear();
        for(let char of item){
            word.set(char,(word.get(char)||0)+1 );
        }
        inner:for(let [key,val] of word){
            if(map.has(key)){
                if(map.get(key) >= val) continue inner;
                else {
                    
                    continue outter;
                }
            } else {
                
                continue outter;
            }
        }

        res+=item.length;
        

    }

    return res;
};