/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count=0;
    let stack = [];
    for(let c of s){
        if(c=="("){
            stack.push(c);
            count = Math.max(count,stack.length);
        }
        if(c==")"){
            stack.pop();
        }
    }

    return count;
};