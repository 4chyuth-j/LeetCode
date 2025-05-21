/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function (cost) {
    let arr = [];
    for (let i = 0; i < cost.length; i++) {
        if (i == 0) {
            arr.push(cost[i]);
        } else {
            let temp = cost[i];
            for(let j=0; j<i; j++){
                temp = Math.min(temp,cost[j]);
            }
            arr.push(temp);
        } 
    }

    return arr;
};