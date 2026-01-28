/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    if(s.length<2) return s;

    let res = [];
    let count = 1;
    
    for(let i=0; i<s.length; i++){
      if(i>0 && s[i]==s[i-1]){
        count++;
      } else {
        count=1;
      }

      if(count<=2){
        res.push(s[i])
      }
    }

    return res.join("");
};




