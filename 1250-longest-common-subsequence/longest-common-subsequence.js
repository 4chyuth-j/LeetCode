/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length, n = text2.length;
    
    const dp = Array.from({length:m+1},()=>new Array(n+1).fill(0));
    let first = new Array(n+1).fill(0);
    let second = new Array(n+1).fill(0);

    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            if(text1[i-1]===text2[j-1]){
                second[j] = first[j-1]+1;
            } else {
                second[j] = Math.max(second[j-1],first[j]);
            }
        }

        first = second;
        second = new Array(n+1).fill(0);
    }

    return first[n];
};