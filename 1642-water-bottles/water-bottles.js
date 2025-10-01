/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let res = 0;
    let emp =0;
    
    while(numBottles>0){
        res+=numBottles;
        emp+=numBottles;
        numBottles = Math.floor(emp/numExchange);
        emp = emp%numExchange;

    }

    return res;
};