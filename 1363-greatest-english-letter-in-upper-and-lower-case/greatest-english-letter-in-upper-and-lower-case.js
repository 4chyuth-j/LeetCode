/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const set = new Set(s);
    for(let i=25; i>=0; i--){
        let lower = String.fromCharCode(97+i);
        let upper = String.fromCharCode(65+i);

        if(set.has(lower) && set.has(upper)){
            return upper;
        }
    }

    return '';
};