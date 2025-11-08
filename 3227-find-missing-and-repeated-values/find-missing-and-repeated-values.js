/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const n = grid.length;
    const freq = new Array(n * n + 1).fill(0);
    const result = [];

    // Count occurrences
    for (const row of grid) {
        for (const val of row) {
            freq[val]++;
            if (freq[val] === 2) {
                result[0] = val; 
            }
        }
    }

    // Find missing number
    for (let i = 1; i <= n * n; i++) {
        if (freq[i] === 0) {
            result[1] = i;
            break;
        }
    }

    return result;
};
