/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count=0;
    for(let item of grid){
        for(let i=0; i<item.length; i++){
            if(item[i]<0) count++
        }
    }
    

    return count;
};