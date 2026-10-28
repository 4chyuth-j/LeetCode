/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
    const m = grid.length, n = grid[0].length;

    let first = Array.from({length:n},()=>new Set());
    let second = Array.from({length:n},()=>new Set());

    second[0].add(grid[0][0]);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(i==0 && j==0) continue;
            if(i>0){
                for(const x of first[j]){
                    second[j].add(x ^ grid[i][j]);
                }
            }

            if(j>0){
                for(const x of second[j-1]){
                    second[j].add(x ^ grid[i][j]);
                }
            }
        }

        first = second;
        second = Array.from({length:n},()=>new Set());
    }

    return Math.min(...first[n - 1]);
};