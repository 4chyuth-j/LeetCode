/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
  let res = 0;
  let dum = num;
  while(dum!=0){
    let dig = dum%10;
    if(num%dig===0) res++;
    dum = Math.floor(dum/10);
  }  

  return res;
};