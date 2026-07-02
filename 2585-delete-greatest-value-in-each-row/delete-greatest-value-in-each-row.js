/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let count = 0;
    for(let item of grid){
        item.sort((a,b)=>a-b);
    }

    while(grid[0].length!=0){
        let max = -Infinity;
        for(let item of grid){
            max = Math.max(max,item.pop());
        }
        count+=max;
    }

    return count;
};