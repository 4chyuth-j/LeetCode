/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let res = s.split("");
    let vowel = [];

    for(let i=0; i<s.length; i++){
        if("aeiouAEIOU".includes(s[i])){
            vowel.push(s[i]);
        }
    }

    if(vowel.length==0) return s;

    let ind=vowel.length-1;

    for(let i=0; i<res.length; i++){
        if('aeiouAEIOU'.includes(res[i])){
            res[i] = vowel[ind];
            ind--;
        }
    }

    return res.join('');
    
};