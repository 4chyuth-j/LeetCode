/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
   for(let i=0; i<prices.length ;i++){
        let curr = prices[i];
        let d = i+1;
        let discount = curr;
        while(d<prices.length){
            if(discount>=prices[d]){
                discount = prices[d];
                prices[i] = curr - discount;
                break;
            } 

            d++;
        }
   } 

   return prices;
};