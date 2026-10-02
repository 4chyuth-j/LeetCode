/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function(s, k) {
    // console.log("z".charCodeAt(0)-97)
    const freq = new Array(26).fill(0);
    for(let c of s){
        freq[c.charCodeAt(0)-97]++;
    }

    let res = [];
    for(let count of freq){
        if(count>0) res.push(count);
    }

    let extraChar = res.length-k;

    if(extraChar==0) return 0;

    res.sort((a,b)=>a-b);

    let count = 0;
    for(let i=0; i<extraChar; i++){
        count+=res[i];
    }

    return count;
};