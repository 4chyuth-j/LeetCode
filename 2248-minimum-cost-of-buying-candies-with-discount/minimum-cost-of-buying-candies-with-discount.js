/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    if(cost.length<3){
        return cost.reduce((red,curr)=>red+curr,0);
    }

    cost.sort((a,b)=>a-b);

    let minCost = 0;

    while(cost.length>0){
        let count = 2;
        while(count && cost.length){
            minCost+=cost.pop();
            count--;
        }

        if(cost.length) cost.pop();
    }

    return minCost;
};