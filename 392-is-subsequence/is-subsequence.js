/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let stack = [];
    for(let i=s.length-1; i>=0; i--){
        stack.push(s[i]);
    }

    for(let c of t){
        if(c===stack[stack.length-1]){
            stack.pop();
        }
    }

    return stack.length===0;
};