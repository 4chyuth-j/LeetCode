/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count =0;
  for(let i=1; i<=num; i++){
    let number =i, sum=0;
    while(number!=0){
        sum += number%10;
        number = Math.floor(number/10);
    }
    if(sum%2==0){
        count++;
    }
  }
  return count;
};