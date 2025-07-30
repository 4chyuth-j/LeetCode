/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if(word.length<3) return false;
    let vowel = /[aeiou]/i;
    const pattern = /[b-df-hj-np-tv-z]/i;
    const number = /[0-9]/;
    let set = new Set();
    for(let char of word){
        set.add(char);
    }

    let vow = false;
    let cons = false;

    for(let item of set){
        if(item.match(vowel)){
            vow = true;
        } else if(item.match(pattern)){
            cons = true;
        } else if(!item.match(number)){
            return false;
        }
    }
    
    return vow && cons;

};