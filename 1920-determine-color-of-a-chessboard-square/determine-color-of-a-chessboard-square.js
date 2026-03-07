/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {

    let getalp = coordinates.charCodeAt(0)-96;
    if(getalp%2===1){
        if(coordinates[1]%2===0) return true;
    } else {
        if(coordinates[1]%2===1) return true;
    }

    return false;
};