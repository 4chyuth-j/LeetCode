/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let large = -1;
    let second = -1;
    for(let c of s){
        if(/^[0-9]$/.test(c)){
            let num = parseInt(c);
            if(num>large){
                second = large;
                large = num;
            } else if(num<large && num>second){
                second = num;
            }
        }
    }

    return second;
};