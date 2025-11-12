/**
 * @param {number} n
 * @return {number[][]}
 */
var generate = function(n) {
    let res = [[1]];
    for(let i=1; i<n; i++){
        let temp = [0,...res[i-1],0];
        let row = [];
        for(let j=0; j<res[i-1].length+1; j++){
            row[j] = temp[j]+temp[j+1];
        }
        res.push(row);
    }
    return res;
};