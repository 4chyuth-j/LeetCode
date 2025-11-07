/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {

    let map = new Map();
    let fword = words[0];
    for (let i = 0; i < fword.length; i++) {
        map.set(fword[i], (map.get(fword[i]) || 0) + 1);
    }

    for (let i = 1; i < words.length; i++) {
        let fMap = new Map();
        for(let c of words[i]){
            fMap.set(c, (fMap.get(c)||0)+1);
        }
        for(let [key,val] of map){
            if(fMap.has(key)){
                let count = fMap.get(key);
                if(count<val){
                    map.set(key,count);
                }
            } else {
                map.delete(key);
            }
        }
    }

    let res = [];
    for(let [key,val] of map){
        for(let i=1; i<=val; i++){
            res.push(key);
        }
    }

    return res;

};


// let res = [] ;
//     let sample = words[0];
//     outter:for(let i=0; i<sample.length; i++){
//         for(let item of words){
//             if(!item.includes(sample[i])) continue outter;
//         }
//         res.push(sample[i]);
//     }
//     return res;