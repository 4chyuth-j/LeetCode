/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let maxLen = 0;
  let map = new Map();
  let maxFreq = 0  
  let l=0,r=0;
  while(r<s.length){
     map.set(s[r],(map.get(s[r])||0)+1);
     maxFreq = Math.max(maxFreq,map.get(s[r]));

     while((r-l+1)-maxFreq>k){
        map.set(s[l],map.get(s[l])-1);
        maxFreq = 0;
        for(let [key,val] of map){
            maxFreq = Math.max(maxFreq,val);
        }
        l++;
     }

    maxLen = Math.max(maxLen,r-l+1);

     r++;


  }

  return maxLen;

};


//   for(let i=0; i<s.length; i++){
//     let map = new Map();
//     let maxfreq = 0
//     for(let j=i; j<s.length; j++){
//         map.set(s[j],(map.get(s[j])||0)+1);
//         maxfreq = Math.max(maxfreq,map.get(s[i]));
//         const change = (j-i+1) - maxfreq;
//         if(change<=k){
//             maxLen = Math.max(maxLen,j-i+1);
//         } else {
//             break;
//         }
//     }
//   }