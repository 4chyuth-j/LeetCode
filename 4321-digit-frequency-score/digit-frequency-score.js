/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    let str = String(n);
    const freq = {};

    for(let c of str){
        if(!freq[c]){
            freq[c] = 0;
        }

        freq[c]++;
    }

    let score = 0;

    for(let key in freq){
        score += Number(key) * freq[key];
    }

    return score;
};