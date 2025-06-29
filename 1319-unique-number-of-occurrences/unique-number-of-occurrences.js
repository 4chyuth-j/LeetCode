/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
   
   let freqMap = new Map();
   for(let num of arr){
    let count = freqMap.get(num) || 0
    freqMap.set(num,count + 1);
   }

   let seen = new Set();
   for(let value of freqMap.values()){
        if(seen.has(value)){
            return false;
        } else {
            seen.add(value);
        }
   }

   return true;

};