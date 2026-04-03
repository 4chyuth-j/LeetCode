/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (plate, words) {
    let map = new Map();
    let res = [];

    for (let c of plate) {
        if (/^[a-zA-Z]$/.test(c)) {
            map.set(c.toLowerCase(), (map.get(c.toLowerCase()) || 0) + 1);
        }
    }


    function isMatch(word) {
        let wMap = new Map();
        for (let c of word) {
            if (/^[a-zA-Z]$/.test(c)) {
                wMap.set(c, (wMap.get(c) || 0) + 1);
            }
        }

        for(let [key,val] of map){
            if(!wMap.has(key) || wMap.get(key)<val){
                return false;
            }
        }

        return true;

    }



    for(let word of words){
        if(isMatch(word)){
            if(res[0] && res[0].length>word.length){
                res.unshift(word);
            } else {
                res.push(word);
            }
        }
    }


    return res[0]

};