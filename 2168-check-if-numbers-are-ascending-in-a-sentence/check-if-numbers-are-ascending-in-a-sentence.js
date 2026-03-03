/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let prev = -Infinity;
    s = s.split(" ");

    for(let c of s){
        if(isNumber(c)){
            let num = parseInt(c);
            if(num>prev){
                prev = num;
            } else {
                return false;
            }
        }
    }

    return true;
    
};

function isNumber(val){
    return !isNaN(val) && !isNaN(parseInt(val));
}