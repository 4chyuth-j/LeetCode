/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
   
    let fmin = Infinity;
    let smin = Infinity;

    for(let p of prices){
        if(p<fmin){
            smin = fmin;
            fmin = p
        } else {
            smin = Math.min(smin,p);
        }
    }

    let netamount = money-(fmin+smin);

    if(netamount>=0) return netamount;
    else return money;
};