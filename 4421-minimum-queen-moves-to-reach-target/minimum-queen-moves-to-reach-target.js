/**
 * @param {number[]} source
 * @param {number[]} target
 * @return {number}
 */
var minQueenMoves = function(source, target) {
    if(source[0]===target[0] && source[1]===target[1]) return 0;
    
    const isDiagonal = (p1,p2)=>{
        return Math.abs(p1[0]-p2[0]) === Math.abs(p1[1]-p2[1]);
    }

    const sameRowOrCol = (p1,p2)=>{
        return p1[0]===p2[0] || p1[1]===p2[1];
    }

    if(isDiagonal(source,target)||sameRowOrCol(source,target)) return 1;


    return 2;
};