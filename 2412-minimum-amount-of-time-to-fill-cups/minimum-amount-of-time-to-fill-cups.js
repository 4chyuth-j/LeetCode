/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    let sec = 0;
    amount.sort((a,b)=>a-b);

   while(amount[1] && amount[2]){
    sec++;
    amount[1]--;
    amount[2]--;
    amount.sort((a,b)=>a-b);
   }

   sec+=amount[2];

   return sec;


};