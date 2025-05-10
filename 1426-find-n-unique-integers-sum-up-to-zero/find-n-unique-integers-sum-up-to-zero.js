/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    let arr = [];
    let dummy = 1;
    if (n % 2 == 1) {
        arr[Math.floor(n / 2)] = 0;
        if (n == 1) {
            return arr;
        }

        for (let i = 0; i < Math.floor(n / 2); i++) {
            let j = n - i-1;
            arr[i] = dummy;
            arr[j] = -dummy;
            dummy++;
        }
    } else {

        for(let i=0; i<n/2; i++){
            let j=n-1-i;
             arr[i] = dummy;
            arr[j] = -dummy;
            dummy++;

        }


    }

    return arr;
};