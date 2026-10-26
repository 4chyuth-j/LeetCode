/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length, n = word2.length;
    const dp = Array.from({length:m+1},()=>new Array(n+1).fill(0));
    for(let j=0; j<=n; j++){
        dp[m][j] = word2.length -j;
    }

    for(let i=0; i<=m; i++){
        dp[i][n] = word1.length - i;
    }

    for(let i=m-1; i>=0; i--){
        for(let j=n-1; j>=0; j--){
            if(word1[i]==word2[j]){
                dp[i][j] = dp[i+1][j+1]
            } else {
                dp[i][j] = Math.min(dp[i][j+1],dp[i+1][j],dp[i+1][j+1])+1;
            }
        }
    }

    return dp[0][0];
};