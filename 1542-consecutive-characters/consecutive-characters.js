/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let pow =1;
    let currlen = 1;
    let stack = [s[0]];
    for(let i=1; i<s.length;i++){

        if(s[i]==stack[stack.length-1]){
            stack.push(s[i]);
            currlen = stack.length;
            if(pow<currlen){
                pow = currlen;
            }
        } else {
            stack = [];
            currlen = 1;
            stack.push(s[i]);
        }
    }

    return pow;
};