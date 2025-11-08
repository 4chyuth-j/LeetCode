/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const n = grid.length;
    const seen = new Set();
    let repeated;

    // Find repeated
    for (const row of grid) {
        for (const val of row) {
            if (seen.has(val)) {
                repeated = val;
            } else {
                seen.add(val);
            }
        }
    }

    // Find missing
    let missing;
    for (let i = 1; i <= n * n; i++) {
        if (!seen.has(i)) {
            missing = i;
            break;
        }
    }

    return [repeated, missing];
};
