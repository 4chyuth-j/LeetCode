/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    let res = [];

    // console.log(getKey('abccdb'));
    
    
    for(let item of strs){
        let dum = getKey(item);
        if(map.hasOwnProperty(dum)){
            map[dum].push(item);
        } else {
            map[dum] = [item];
        }
    }

    for(let val of Object.values(map)){
        res.push(val);
    }

    return res;

};

function getKey(strg){
    let arr = new Array(26).fill(0);
    for(let c of strg){
        arr[c.charCodeAt(0)-'a'.charCodeAt(0)]++
    }

    return arr.join('#');
}