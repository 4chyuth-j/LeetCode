/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    let [s1,s2] = [cost[0],cost[1]];
    for(let i=2; i<n; i++){
        [s1,s2] = [s2,Math.min(s1,s2)+cost[i]]
    }

    return Math.min(s1,s2);
};