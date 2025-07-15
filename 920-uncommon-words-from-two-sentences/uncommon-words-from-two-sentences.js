/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    s1 = s1.split(' ')
    s2 = s2.split(' ')
    let freqMap = new Map();
    for(let i=0 ; i<s1.length; i++){
        freqMap.set(s1[i],(freqMap.get(s1[i]) || 0)+1);
    }

    for(let i=0 ; i<s2.length; i++){
        freqMap.set(s2[i],(freqMap.get(s2[i]) || 0)+1);
    }

    let result = [];

    for(let [key,value] of freqMap){
        if(value ==1){
            result.push(key);
        }
    }

    return result;
};