/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    const degree = [];

    for(let index of matrix){
        let count = 0;
        for(let edge of index){
            if(edge) count++;
        }
        degree.push(count);
    }

    return degree;
};