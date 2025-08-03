/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let res = ''
    for(let i=1;i<=n; i++){
        res+='a';
    }
    if(n%2==1){
        return res;
    } else {
        res = res.slice(0,-1)+'b';
        return res;
    }
   
};