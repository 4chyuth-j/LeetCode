/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res = '';
    let depth = 0;

    for(let c of s){
        if(c==='('){
            if(depth>0) res+=c;
            depth++;
        } else {
            depth--;
            if(depth>0) res+=c;
        }
    }

    return res;
};