/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const n = cost.length;
    
    let t0 = cost[0], t1 = cost[1];


    for (let i = 2; i < n; i++) {
        [t0, t1] = [t1, Math.min(t1, t0) + cost[i]];
    }

    return Math.min(t0,t1);
};