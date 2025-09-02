/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count=0;
    m=grid.length;
    
    for(let i=0; i<m; i++){
      for(let j=0;j<grid[i].length; j++){
           
           if((grid[i][j])<0){
            count=count+1;
           }

      }  
    }
    return count;
};