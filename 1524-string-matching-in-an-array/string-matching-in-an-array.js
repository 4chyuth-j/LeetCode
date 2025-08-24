/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let res = [];
    outter:for(let i=0; i<words.length; i++){
        for(let j=0; j<words.length; j++){
            if(i!=j){
                if(words[j].includes(words[i])){
                    res.push(words[i]);
                    continue outter;
                }
            }
        }
    }

    return res;
};