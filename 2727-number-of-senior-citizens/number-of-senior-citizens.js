/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let number = 0;
    for(let i=0; i<details.length; i++){
        let piece = Number(details[i].slice(11,13));
        if(piece>60){
            number++;
        }

    }
    return number;
};