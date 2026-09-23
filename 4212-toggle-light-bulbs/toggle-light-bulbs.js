/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function(bulbs) {
    let set = {};
    for(let num of bulbs){
        if(!set[num]){
            set[num] = 1;
        } else {
            set[num]++;
        }
    }

    let res = [];

    for(let key of Object.keys(set)){
        if(set[key]%2==1){
            res.push(Number(key));
        }
    }

    return res;
};