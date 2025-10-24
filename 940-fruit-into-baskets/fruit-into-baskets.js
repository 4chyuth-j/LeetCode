/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let l = 0, r = 0;
    let maxlen = 0;
    let fruitMap = new Map();
    let len = fruits.length;

    while (r < len) {
        fruitMap.set(fruits[r], (fruitMap.get(fruits[r]) || 0) + 1);
        if (fruitMap.size <= 2) {
            maxlen = Math.max(maxlen, r - l + 1);
        } else {
            while (fruitMap.size > 2) {

                fruitMap.set( fruits[l] , (fruitMap.get(fruits[l])) - 1);

                if (fruitMap.get(fruits[l]) == 0) {
                    fruitMap.delete(fruits[l]);
                }


                l++;
            }
        }

        r++;
    }

    return maxlen;
};