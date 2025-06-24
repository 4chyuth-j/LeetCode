/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    if(Math.abs(z-x)>Math.abs(y-z)){
        return 2;
    } else if(Math.abs(z-x)< Math.abs(y-z)){
        return 1;
    } else {
        return 0;
    }
};