/**
 * @param {string} s
 * @return {boolean}
 */
var scoreBalance = function(s) {
    let firstSum = 0,lastSum = 0;
    for(let c of s){
        lastSum+=c.charCodeAt(0)-96;
    }

    for(let c of s){
        firstSum +=c.charCodeAt(0)-96;
        lastSum -=c.charCodeAt(0)-96;
        if(firstSum==lastSum) return true;
    }

    return false;
};