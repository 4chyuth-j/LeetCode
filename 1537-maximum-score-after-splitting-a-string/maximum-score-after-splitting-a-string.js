/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let totalOnes = 0, zeroCount = 0, oneCount = 0, maxScore = -Infinity;

    for (let c of s) {
        if (c === '1') totalOnes++;
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            zeroCount++;
        } else {
            oneCount++;
        }

        const currentScore = zeroCount + (totalOnes - oneCount);
        maxScore = Math.max(maxScore, currentScore);
    }

    return maxScore;

};