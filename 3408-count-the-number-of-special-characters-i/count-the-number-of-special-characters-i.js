/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let set = new Set(word);
    let res = 0;
    for(let i=0; i<26; i++){
        let char = String.fromCharCode(i+97);
        if(set.has(char) && set.has(char.toUpperCase())){
            res++;
        }
    }

    return res;
};

/*
let freq = new Array(26).fill(0);
    for(let c of word){
        let i = c.toLowerCase().charCodeAt(0)-97;
        if(c==c.toUpperCase()){
            
        }
    }
 */