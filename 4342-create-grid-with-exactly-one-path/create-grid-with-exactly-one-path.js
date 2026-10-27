/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    const res = Array.from({length:m},()=>new Array(n).fill("#"));
    
    for(let j=0; j<n; j++){
        res[0][j] = ".";
    }

    for(let i=0; i<m; i++){
        res[i][n-1] = ".";
    }

    return res.map(item=>item.join(""));
};