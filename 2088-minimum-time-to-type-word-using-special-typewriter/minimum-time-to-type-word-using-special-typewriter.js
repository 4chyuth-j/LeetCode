/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let ans = 0;
    let pointer = 'a';
    for(let c of word){
        let clockwise  = Math.abs(c.charCodeAt(0)-pointer.charCodeAt(0));
        let counterClockwise = 26-clockwise;
        ans+=Math.min(clockwise,counterClockwise)+1;
        pointer = c;
    }

    return ans;
};