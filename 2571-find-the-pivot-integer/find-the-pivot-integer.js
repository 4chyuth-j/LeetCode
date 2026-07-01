/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let totalSum = 0;
    for(let i=1; i<=n; i++){
        totalSum+=i;
    }

    let leftSum = 0;
    let i = 1;
    while(leftSum<=totalSum){
        leftSum+=i;

        if(leftSum==totalSum) return i;

        totalSum-=i;
        i++;
    }

    return -1;
};