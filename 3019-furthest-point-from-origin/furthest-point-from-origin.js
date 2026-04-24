/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let dashCount = 0, Lcount = 0, Rcount = 0;
    for(let c of moves){
        if(c==="_"){
            dashCount++;
        } else if (c==="L"){
            Lcount++;
        } else {
            Rcount++;
        }
    }


    return Lcount>Rcount? Lcount+dashCount-Rcount : Rcount+dashCount-Lcount;
};