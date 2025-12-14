/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sMap = new Map();
    let tMap = new Map();
    for(let c of s){
        sMap.set(c, (sMap.get(c) || 0)+1 );
    }

    for(let c of t){
        tMap.set(c, (tMap.get(c)||0)+1 );
    }

    for(let [key,val] of tMap){
        if(sMap.has(key)){
            if(sMap.get(key)!=tMap.get(key)){
                return key;
            }
        } else {
            return key;
        }
    }
};