/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function(s) {
    if(s.length<=1) return s;
    const str = [];
    const char = [];
    const spec = [];

    for(let item of s){
        if(/^[a-z]+$/.test(item)){
            char.push(item);
        } else {
            spec.push(item);
        }
    }

    for(let item of s){
        if(/^[a-z]+$/.test(item)){
            str.push(char.pop());
        } else {
            str.push(spec.pop());
        }
    }

    return str.join('');
    
};