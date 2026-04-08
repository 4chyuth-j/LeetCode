/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let flag = new Array(26).fill(0);

    console.log('a'.charCodeAt(0))

    for(let c of sentence){
        let code = c.charCodeAt(0)-97;
        flag[code] = 1; 
    }

    for(let c of flag){
        if(c==0) return false;
    }

    return true;
};