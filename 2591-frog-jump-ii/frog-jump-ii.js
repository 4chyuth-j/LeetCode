/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function(stones) {
    if(stones.length<=3){
        return Math.abs(stones[0]-stones[stones.length-1]);
    }

    let cost = 0;

    for(let i=0; i<stones.length-2; i++){
        let val = stones[i+2]-stones[i];
        cost = Math.max(cost,val);
    }

    return cost;
};