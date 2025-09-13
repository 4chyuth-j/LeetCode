/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let freq ={};
    let vow=0,cons=0;
    for(let c of s){
        freq[c]=(freq[c] || 0)+1;
    }

    for(let ch in freq){
        if(/^[aeiou]$/i.test(ch)){
            vow = Math.max(freq[ch],vow);
        } else {
            cons = Math.max(freq[ch],cons);
        }
    }

    return vow+cons;
};