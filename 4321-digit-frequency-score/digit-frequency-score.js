/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    let str = String(n);
    const freq = new Array(10).fill(0);

    for(let c of str){
        freq[c]++;
    }

    let score = 0;

    for(let key in freq){
        score += Number(key) * freq[key];
    }

    return score;
};