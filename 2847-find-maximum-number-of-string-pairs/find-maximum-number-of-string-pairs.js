/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let res = 0;
    let set = new Set();
    for(let i=0; i<words.length; i++){
        if(set.has(i)){
            continue;
        }
        for(let j=i+1; j<words.length; j++){
            if(words[i][0]==words[j][1] && words[i][1]==words[j][0]){
                res++;
                set.add(j);
            }
        }
        // res = Math.max(count,res);
    }
    return res;
};