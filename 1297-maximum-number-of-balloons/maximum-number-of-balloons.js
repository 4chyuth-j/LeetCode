/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let freq = {
        'b':1,
        'a':1,
        'l':2,
        'o':2,
        'n':1
    };

    const freqMap = new Map();

    for(let c of text){
        if(c=='b' || c=='a' || c=='l' || c=='o' || c=='n'){
            freqMap.set(c, (freqMap.get(c) || 0)+1 );
        }
    }

    console.log(freqMap)

    if(freqMap.size<5) return 0;

    let arr = [];
    let res = 0;
    for(let [key,val] of freqMap){
        arr.push(Math.floor(val/(freq[key])));
    }

    res = Math.min(...arr);

    return res;

};