/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {

    if(flowerbed.length==1){
        if(flowerbed[0]==0 && n<=1){
            return true;
        } else if(flowerbed[0]==1 && n==0) {
            return true;
        } else {
            return false;
        }
    }

    for (let i = 0; i < flowerbed.length; i++) {
        if(n==0) return true;
        if (i == 0 && flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
            n--;
            flowerbed[i] = 1;
        }

        if (i == flowerbed.length - 1 && flowerbed[i] == 0 && flowerbed[i - 1] == 0) {
            n--;
            flowerbed[i] = 1;
        }

        if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
            n--;
            flowerbed[i] = 1;
        }

    }
    console.log(n)

    return n == 0;
};