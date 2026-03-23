/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
   for(let i=0; i<prices.length ;i++){
        let curr = prices[i];
        let d = i+1;
        while(d<prices.length){
            if(curr>=prices[d]){
                prices[i] = curr - prices[d];
                break;
            } 
            d++;
        }
   } 

   return prices;
};