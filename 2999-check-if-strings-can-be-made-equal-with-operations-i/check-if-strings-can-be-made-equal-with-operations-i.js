/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    if(s1===s2) return true;

    let oddMap = new Map();
    let evenMap = new Map();

    for(let i=0; i<s1.length; i++){
        let map = (i%2===0)?evenMap:oddMap;
        map.set(s1[i],(map.get(s1[i]) || 0)+1);
    }

    for(let i=0; i<s2.length; i++){
        let map = (i%2===0)?evenMap:oddMap;
        if(!map.has(s2[i])) return false;

        let count = map.get(s2[i])-1;
        map.set(s2[i],count);
        if(count==0) map.delete(s2[i]);
    }

    return true;
};