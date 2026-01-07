/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let perm = []
    let low = 0;
    let high = s.length;
    for(let c of s){
        if(c==='I'){
            perm.push(low);
            low++;
        } 
        if(c==="D"){
            perm.push(high);
            high--;
        }
    }
    
    perm.push(high);

    return perm;
};