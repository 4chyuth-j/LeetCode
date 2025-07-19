/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let lookup = new Map();
    for(let i=0; i<alpha.length; i++){
        lookup.set(alpha[i],i+1);
    }

    let alpDig = '';
    for(let i=0; i<s.length; i++){
        let value = lookup.get(s[i]);
        alpDig +=`${value}`;
    }

    

    let result = (alpDig);
    for(let i=1; i<=k; i++){
       let sum = 0;
        for(let ch of result) {
            sum += parseInt(ch);
        }
        result = sum.toString();
    }

    
    return parseInt(result);

};