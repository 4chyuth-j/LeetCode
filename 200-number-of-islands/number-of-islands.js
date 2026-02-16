/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dfs = (i,j,visited,grid,m,n)=>{
        if(i<0 || j<0 || i>=m || j>=n || visited[i][j] || grid[i][j]!='1') return;

        visited[i][j] = true;

        dfs(i-1,j,visited,grid,m,n);
        dfs(i,j+1,visited,grid,m,n);
        dfs(i+1,j,visited,grid,m,n);
        dfs(i,j-1,visited,grid,m,n)

    }

    const m = grid.length;
    const n = grid[0].length;

    const visited = Array.from({length:m},()=>Array(n).fill(false));
    let islandCount = 0;

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(!visited[i][j] && grid[i][j]=='1'){
                dfs(i,j,visited,grid,m,n);
                islandCount++;
            }
        }
    }


    return islandCount;
};