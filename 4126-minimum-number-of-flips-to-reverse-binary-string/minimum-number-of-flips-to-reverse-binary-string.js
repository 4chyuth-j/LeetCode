/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function(n) {
    let str = n.toString(2);
    let rev = str.split("").reverse().join("");

    if(str==rev) return 0;
    let flip = 0;

    for(let i=0; i<str.length; i++){
        if(str[i]!==rev[i]) flip++;
    }

    return flip;
};