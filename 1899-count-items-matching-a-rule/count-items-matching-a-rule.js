/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;
    let index = {
        "type": 0,
        "color": 1,
        "name": 2
    }
    
    let i = index[ruleKey];

    for(let item of items){
        if(item[i]==ruleValue){
            count++;
        }
    }

    return count;
};