/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = Math.floor((high+1)/2) - Math.floor(low/2);
    return count;
};