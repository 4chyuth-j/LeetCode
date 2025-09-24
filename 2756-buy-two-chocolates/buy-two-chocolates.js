/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b);
    let amount = prices[0]+prices[1];
    if(amount<=money){
        return money-amount;
    } else {
        return money;
    }
};