/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let res =0;
    let emp =0;
    
    while(numBottles>0){
        res+=numBottles;
        emp+=numBottles;
        if(emp>=numExchange){
            numBottles=1;
            emp = emp-numExchange;
            numExchange++;
        } else {
            numBottles =0;
        }
    }

    return res;
};