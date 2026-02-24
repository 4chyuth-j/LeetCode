/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let res = [];
    for(let c of letters){
        if(c>target) res.push(c);
    }

    return res.length!==0?res[0]:letters[0];
};