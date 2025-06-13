/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
   function powerFour(num){
    if(num<=0) return false;
    if(num==1) return true;
    return powerFour(num/4);
   }

   return powerFour(n);
};