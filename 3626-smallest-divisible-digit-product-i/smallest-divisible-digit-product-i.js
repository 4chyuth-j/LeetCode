/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    while(true){
        let prod = getProduct(n);
        if(prod%t==0) return n;
        n++;
    }
};

function getProduct(num){
    let prod = 1;
    while(num>0){
        let dig = num%10;
        num = Math.floor(num/10);
        prod *=dig;
        if(prod==0)break
    }

    return prod;
}