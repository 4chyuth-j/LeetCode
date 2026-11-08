/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    let count = 0;
    const m = grid.length, n = grid[0].length;
    const freqRow = {};
    const freqCol = {};
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(grid[i][j]===1){
                if(!freqRow[i]) freqRow[i] = 0;
                if(!freqCol[j]) freqCol[j] = 0;
                freqRow[i]++;
                freqCol[j]++;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(grid[i][j]===1){
                if(freqRow[i]>1 || freqCol[j]>1) count++;
            }
        }
    }

    return count;
};