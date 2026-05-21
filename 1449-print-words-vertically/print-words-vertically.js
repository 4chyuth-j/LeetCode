/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    let arr = s.split(" ");
    let res = [];
    let maxLen = 0;

    for(let word of arr){
        maxLen = Math.max(maxLen,word.length);
    }

    for(let i=0; i<maxLen; i++){

        let vert = '';
        for(let word of arr){
            if(i<word.length){
                vert+=word[i];
            } else {
                vert+=" ";
            }
        }

        res.push(vert.trimEnd());
    }

    return res;


};