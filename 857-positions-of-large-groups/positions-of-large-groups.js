/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
   let res = [];
   let start = 0;
   let n =s.length;
   while(start<n){
      let end = start;
      while(end<n && s[end]==s[start]){
        end++
      }

      if(end-start>=3){
        res.push([start,end-1]);
      }

      start = end;
   } 

   return res;
};