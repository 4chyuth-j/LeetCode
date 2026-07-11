/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
  gifts.sort((a,b)=>b-a);
  
  while(k>0){
    let elem = Math.floor(Math.sqrt(gifts[0]));
    gifts[0] = elem;
    gifts.sort((a,b)=>b-a);
    k--;
  }

  return gifts.reduce((acc,red)=>{return acc+red},0);
};
