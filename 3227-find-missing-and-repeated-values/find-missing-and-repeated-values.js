/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let n = grid.length;
    let arr = new Array(n * n + 1).fill(0);
    let res = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[grid[i][j]] == 0) {
                arr[grid[i][j]]++;
            } else {
                res[0] = grid[i][j];

            }
        }
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == 0) {
            res.push(i);
            break;
        }
    }

    return res;
};