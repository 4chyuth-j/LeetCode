/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let count = 0;
    costs.sort((a,b)=>a-b);
    for(let item of costs){
        if(item<=coins){
            count++;
            coins-=item;
        } else {
            break;
        }
    }

    return count;
};