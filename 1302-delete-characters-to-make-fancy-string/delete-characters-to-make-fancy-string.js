/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    if(s.length<2) return s;

    let res = [s[0],s[1]]
    
    for(let i=2; i<s.length; i++){
      const n = res.length;
      if(res[n-1]===res[n-2] && res[n-1]===s[i]){
        continue;
      }

      res.push(s[i]);

    }

    return res.join("");
};




