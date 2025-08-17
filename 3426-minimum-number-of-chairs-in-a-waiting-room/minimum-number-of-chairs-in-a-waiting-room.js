/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let currOccupancy = 0;
    let maxOccupancy = 0;

    for(let i=0; i<s.length; i++){
        if(s[i]=='E'){
            currOccupancy++;
        } else {
            currOccupancy--;
        }

        if(currOccupancy>maxOccupancy){
            maxOccupancy = currOccupancy;
        }
    }

    return maxOccupancy;
};