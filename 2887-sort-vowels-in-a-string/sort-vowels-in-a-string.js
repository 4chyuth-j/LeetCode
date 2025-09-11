/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let res = s.split("");
    let vowel = new Array();
    for(let i=0; i<s.length; i++){
        if(/^[aeiou]$/i.test(s[i])){
            vowel.push(s[i]);
        }
    }
    
    vowel.sort();
    
    let ind=0;
    for(let i=0; i<res.length; i++){
        if(/^[aeiou]$/i.test(res[i])){
            res[i] = vowel[ind];
            ind++;
        }
    }

    return res.join("");
};