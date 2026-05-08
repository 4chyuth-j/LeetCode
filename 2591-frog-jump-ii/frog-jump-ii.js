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
        let first = stones[i+1]-stones[i];
        let second = stones[i+2]-stones[i];
        let max = Math.max(first,second);

        cost = Math.max(cost,max);


    }

    return cost;
};