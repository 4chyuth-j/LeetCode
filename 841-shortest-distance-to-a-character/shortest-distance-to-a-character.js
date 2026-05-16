/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let charMap = [];
    for(let i=0; i<s.length; i++){
        if(s[i]===c){
            charMap.push(i);
        }
    }

    let res = new Array(s.length).fill(0);

    
    for(let j=0; j<s.length; j++){
        let min = Infinity;
        for(let i=0; i<charMap.length; i++){
            min = Math.min(Math.abs(j-charMap[i]),min);
        }

        res[j] = min;
    }

    return res;
};