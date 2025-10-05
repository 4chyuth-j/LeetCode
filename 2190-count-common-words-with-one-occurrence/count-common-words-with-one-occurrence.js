/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {

    let map1 = new Map();
    let map2 = new Map();
    let res = 0;

    for(let word of words1){
        map1.set(word,(map1.get(word)||0)+1 );
    }

    for(let word of words2){
        map2.set(word,(map2.get(word)||0)+1 );
    }

    for(let [key,val] of map1){
        if(val==1 && map2.get(key)==1){
            res++;
        }
    }

    return res;
    
};