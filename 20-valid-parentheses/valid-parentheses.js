/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
   const pair = {
      '(': ')',
      '{': '}', 
      '[': ']'
   }

   const stack = [];

   for(let c of s){
      if(pair[c]){
        stack.push(c);
      } else {
        const last = stack.pop();
        if(pair[last]!==c) return false;
      }
   }

   return stack.length==0;

};




