/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    let res = [];
    let dum = '';
    
    for(let item of strs){
        dum = item.split('').sort().join('');
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