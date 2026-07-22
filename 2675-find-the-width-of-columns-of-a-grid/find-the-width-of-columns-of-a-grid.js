/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    let res = [];
    let row = grid.length-1;
    let col = grid[0].length-1;
    for(let i=0; i<=col; i++ ){
        let max = 0;
        for(let j=0; j<=row; j++){
            max = Math.max(max,String(grid[j][i]).length);
        }
        res.push(max);
    }

    return res;
};