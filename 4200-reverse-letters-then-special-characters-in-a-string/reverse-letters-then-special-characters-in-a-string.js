/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function(s) {
    if(s.length<=1) return s;
    let str = ''
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
            str+=char.pop();
        } else {
            str+=spec.pop();
        }
    }

    return str;
    
};