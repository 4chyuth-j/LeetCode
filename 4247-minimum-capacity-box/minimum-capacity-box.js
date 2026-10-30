/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function (capacity, itemSize) {
    let min = {
        value: Infinity,
        ind: -1,
    };

    for (let i=0; i<capacity.length; i++) {
        if (capacity[i] >= itemSize) {
            if (min.value > capacity[i]) {
                min.value = capacity[i];
                min.ind = i;
            }
        }
    }

    return min.ind;
};