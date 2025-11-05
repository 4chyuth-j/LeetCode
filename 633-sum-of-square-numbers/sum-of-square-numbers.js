/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let n = Math.floor(Math.sqrt(c));
    let map = new Map();
    for(let i=0; i<=n; i++){
        map.set(i*i,i);
    }
    for(let b=0; b<=n; b++){
        let rem = c - b*b;
        if(map.has(rem)){
            return true;
        }
    }

    return false;
};