/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    
    let vowel = new Array();
    for(let i=0; i<s.length; i++){
        if(/^[aeiou]$/i.test(s[i])){
            vowel.push(s[i]);
        }
    }
    
    vowel.sort();
    let res ='';
    let ind=0;
    for(let i=0; i<s.length; i++){
        if(/^[aeiou]$/i.test(s[i])){
            res += vowel[ind];
            ind++;
        } else {
            res += s[i];
        }
    }

    return res;
};