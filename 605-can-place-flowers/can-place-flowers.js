/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {

    for (let i = 0; i < flowerbed.length && n > 0; i++) {
        const left = (i == 0) ? 0 : flowerbed[i - 1];
        const right = (i == flowerbed.length - 1) ? 0 : flowerbed[i + 1];
        if (flowerbed[i] == 0 && left == 0 && right == 0) {
            n--;
            flowerbed[i] = 1;
        }
    }

    return n == 0;
};