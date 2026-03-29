/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    if(s1===s2) return true;

    let oddMap = new Map();
    for(let i=0; i<s1.length; i=i+2){
        oddMap.set(s1[i],(oddMap.get(s1[i]) || 0)+1);
    }

    for(let i=0; i<s2.length; i=i+2){
        if(oddMap.has(s2[i])){
            let count = oddMap.get(s2[i])-1;
            oddMap.set(s2[i],count);
            if(count==0) oddMap.delete(s2[i]);
        } else {
            return false;
        }
    }

    let evenMap = new Map();
    for(let i=1; i<s1.length; i=i+2){
        evenMap.set(s1[i],(evenMap.get(s1[i]) || 0)+1);
    }

    for(let i=1; i<s2.length; i=i+2){
        if(evenMap.has(s2[i])){
            let count = evenMap.get(s2[i])-1;
            evenMap.set(s2[i],count);
            if(count==0) evenMap.delete(s2[i]);
        } else {
            return false;
        }
    }

    return true;
};