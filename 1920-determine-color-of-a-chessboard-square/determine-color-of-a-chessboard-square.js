/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let map = {
        'a':1,
        'b':2,
        'c':3,
        'd':4,
        'e':5,
        'f':6,
        'g':7,
        'h':8,
    };

    let getalp = map[coordinates[0]];
    if(getalp%2===1){
        if(coordinates[1]%2===0) return true;
    } else {
        if(coordinates[1]%2===1) return true;
    }

    return false;
};