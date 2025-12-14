/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sMap = new Map();
    
    for(let c of s){
        sMap.set(c, (sMap.get(c) || 0)+1 );
    }

    for(let c of t){
        if(sMap.has(c)){
            sMap.set(c,(sMap.get(c))-1);
            if(sMap.get(c)==0){
                sMap.delete(c);
            }
        } else {
            return c;
        }
    }

    
};