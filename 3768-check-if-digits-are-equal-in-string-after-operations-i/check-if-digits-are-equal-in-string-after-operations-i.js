/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    let str = s;
    while(str.length>2){
        let dum = "";
        for(let i=0; i<str.length-1; i++){
            dum +=Math.floor((Number(str[i])+Number(str[i+1]))%10);
        }
        str = dum;
    }

    return str[0]===str[1];
};