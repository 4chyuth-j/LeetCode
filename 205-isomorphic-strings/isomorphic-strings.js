/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!=t.length) return false

    let map = new Map();
    let map2 = new Map();

    for(let i=0; i<s.length; i++){
        if(!map.has(s[i]) ){
            map.set(s[i],t[i]);
        } else{
            if(map.get(s[i])!=t[i]){
                return false;
            }
        }
    }


    for(let i=0; i<t.length; i++){
        if(!map2.has(t[i]) ){
            map2.set(t[i],s[i]);
        } else{
            if(map2.get(t[i])!=s[i]){
                return false;
            }
        }
    }

    return true;
};