/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let arr = paragraph.toLowerCase().split(/\W+/g);
    let pattern = '/\W+/g';
    let map = new Map();
    let set = new Set(banned);
    console.log(arr);

    for(let word of arr){
        map.set(word,(map.get(word) || 0)+1);
    }

    let result = [...map];
    result.sort((a,b)=>{
        return b[1]-a[1];
    });

    console.log(result)

    for(let item of result){
        if(!set.has(item[0]) && item[0]!=''){
            return item[0];
        }
    }


};